import { act, renderHook } from '@testing-library/react-native';
import { useProfile } from './useProfile';
import { Alert } from 'react-native';
import fetchMock from 'jest-fetch-mock';

const alertMock = jest.spyOn(Alert, 'alert');
fetchMock.enableMocks();

describe('useProfile hook', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should not be able fetch user data if username is not provided', async () => {
    const { result } = renderHook(() => useProfile());

    await act(async () => {
      result.current.fetchUser();
    });

    expect(alertMock).toHaveBeenCalledWith('username não informado');
  });

  it('should return user data when username is valid', async () => {
    const mockData = {
      username: 'mockUser',
      id: 1,
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const { result } = renderHook(() => useProfile());

    act(() => {
      result.current.setUsername('mockUser');
    });

    await act(async () => {
      await result.current.fetchUser();
    });

    expect(result.current.user).toEqual(mockData);
  });

  it('should show a toast error if requisition fails', async () => {
    fetchMock.mockRejectOnce(new Error('Failed to fetch'));

    const { result } = renderHook(() => useProfile());

    act(() => {
      result.current.setUsername('mockUser');
    });

    await act(async () => {
      await result.current.fetchUser();
    });

    expect(alertMock).toHaveBeenCalledWith('Erro ao buscar usuário');
  });
});
