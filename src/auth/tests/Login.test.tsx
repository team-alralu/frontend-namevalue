import userEvent from '@testing-library/user-event';
import { Login } from '@auth/components/Login';
import { render, screen } from '@testing-library/react';
import { EmotionThemeProviderMock, AppRouterContextProviderMock } from '@mocks/contexts';

const renderLoginComponent = (push?: () => void) => {
  render(
    <AppRouterContextProviderMock router={{ push }}>
      <EmotionThemeProviderMock>
        <Login />
      </EmotionThemeProviderMock>
    </AppRouterContextProviderMock>
  );
};
describe('로그인 페이지 테스트 <Login/> ', () => {
  it('로그인 페이지가 올바르게 렌더링된다.', () => {
    renderLoginComponent();
    expect(screen.getByLabelText('application logo image')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('로그인 버튼을 클릭하면 라우팅이 발생한다.', async () => {
    const routePushMock = jest.fn();
    renderLoginComponent(routePushMock);

    const $naverLoginLink = screen.getAllByRole('link')[0];
    const $googleLoginLink = screen.getAllByRole('link')[1];

    await userEvent.click($naverLoginLink);
    expect(routePushMock).toHaveBeenCalled();

    await userEvent.click($googleLoginLink);
    expect(routePushMock).toHaveBeenCalled();
  });
});
