import userEvent from '@testing-library/user-event';
import { MOCK_USER_NAME, MOCK_INVALID_USER_NAME } from '@mocks/constants/userNameMocks';
import { InputName } from '@registration/components';
import { render, screen, fireEvent } from '@testing-library/react';
import { EmotionThemeProviderMock, RegistrationFunnelProviderMock } from '@mocks/contexts';

const renderInputNameComponent = (onNext?: () => void) => {
  const setStepMock = jest.fn();
  const dispatchNameMock = jest.fn();
  render(
    <EmotionThemeProviderMock>
      <RegistrationFunnelProviderMock setStep={setStepMock}>
        <InputName onNext={onNext ?? jest.fn()} dispatchName={dispatchNameMock} />
      </RegistrationFunnelProviderMock>
    </EmotionThemeProviderMock>
  );
};

describe('이름 평가자 입력 페이지 테스트 <InputName/>', () => {
  it('이름 평가자 입력 페이지가 올바르게 렌더링된다.', () => {
    renderInputNameComponent();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText('question image')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('페이지에 진입했을 때 이름 input은 빈 값으로 출력된다.', () => {
    renderInputNameComponent();
    const $inputName = screen.getByRole('textbox');
    expect($inputName).toHaveValue('');
  });

  it.each(MOCK_INVALID_USER_NAME)(
    '이름이 입력되지 않거나 두 글자 미만이면 "입력완료" 버튼이 비활성화된다. ($name)',
    async ({ name }) => {
      renderInputNameComponent();
      const $inputName = screen.getByRole('textbox');
      const $submitButton = screen.getByRole('button');
      await userEvent.type($inputName, name);
      expect($inputName).toHaveValue(name);
      expect($submitButton).toBeDisabled();
    }
  );

  it.each(MOCK_USER_NAME)(
    '이름이 두 글자 이상 입력된 경우에만 "입력완료" 버튼이 활성화된다. ($name)',
    async ({ name }) => {
      renderInputNameComponent();
      const $inputName = screen.getByRole('textbox');
      const $submitButton = screen.getByRole('button');
      await userEvent.type(screen.getByRole('textbox'), name);
      expect($inputName).toHaveValue(name);
      expect($submitButton).toBeEnabled();
    }
  );

  it('"입력완료" 버튼을 클릭하면 페이지를 벗어난다.', async () => {
    const onNext = jest.fn();
    renderInputNameComponent(onNext);
    const $inputName = screen.getByRole('textbox');
    const $submitButton = screen.getByRole('button');
    await userEvent.type($inputName, '최코딩');
    fireEvent.submit($submitButton);
    expect(onNext).toHaveBeenCalled();
  });
});
