/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { InputViewContainer, TextInputContainer, IonIconsContainer, IconButtonContainer } from './styles';

const CustomInput = ({ handleChange, left, rightIcon, rightIconName, forPassword, leftIcon, ...otherProps }) => {

	const handleEdit = () => {
		alert("Edit")
	}

	return (
		<InputViewContainer {...otherProps}>
			<TextInputContainer maxLength={50} onChange={handleChange} {...otherProps} />
		</InputViewContainer>
	);
}; 

export default React.memo(CustomInput);