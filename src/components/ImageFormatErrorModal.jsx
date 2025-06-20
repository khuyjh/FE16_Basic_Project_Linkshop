import styled from 'styled-components';

import BaseButton from './PrimaryButton';
import BaseModal from '../layouts/BaseModal';
import { applyFontStyles } from '../styles/mixins';
import { FontTypes } from '../styles/theme';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  ${applyFontStyles(FontTypes.REGULAR17)};
  white-space: pre-wrap;
`;

const ImageFormatErrorModal = ({ isOpen, onConfirm, message }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      className='common-modal-content image-format-error-modal'
    >
      <FlexDiv>
        {message}
        <BaseButton
          width='160px'
          height='50px'
          $fontType={FontTypes.SEMIBOLD17}
          onClick={onConfirm}
        >
          확인
        </BaseButton>
      </FlexDiv>
    </BaseModal>
  );
};

export default ImageFormatErrorModal;
