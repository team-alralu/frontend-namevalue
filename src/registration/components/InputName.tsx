'use client';

interface InputNameProps {
  onNext: () => void;
}

export const InputName = ({ onNext }: InputNameProps) => {
  return (
    <div>
      InputName
      <button type="button" onClick={onNext}>
        onNext
      </button>
    </div>
  );
};
