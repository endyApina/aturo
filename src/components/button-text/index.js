import React from 'react';

import { ButtonTextContainer } from  './style';

const ButtonText = ({ children, ...otherProps }) => (
	<ButtonTextContainer {...otherProps}>{children}</ButtonTextContainer>
);

export default ButtonText;