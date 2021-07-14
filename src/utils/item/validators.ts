import * as yup from 'yup';
import { body } from 'express-validator';

import { BuildMessages } from '../messages/common';

export const getAllItemSchema = yup.object().shape(
    {
        vocation: yup
            .string()
            .strict(true)
            .optional()
            .length(50, BuildMessages.maxLengthMessage('vocation', '50')),
        min_level_required: yup
            .string()
            .strict(true)
            .optional()
            .when('max_level_required', {
                is: (value: any) => value !== undefined && value !== '',
                then: yup
                    .string()
                    .required(BuildMessages.requiredMessage('max_level_required')),
                otherwise: yup.string(),
            }),
        max_level_required: yup
            .string()
            .strict(true)
            .optional()
            .when('min_level_required', {
                is: (value: any) => value !== undefined && value !== '',
                then: yup
                    .string()
                    .required(BuildMessages.requiredMessage('min_level_required')),
                otherwise: yup.string(),
            }),
    },
    [['min_level_required', 'max_level_required']],
);

export const postItemSchema = yup.object().shape({
    description: yup
        .string()
        .strict(true)
        .required(BuildMessages.requiredMessage('vocation'))
        .length(300, BuildMessages.maxLengthMessage('vocation', '300')),
    weight: yup
        .string()
        .strict(true)
        .required(BuildMessages.requiredMessage('vocation'))
        .length(10, BuildMessages.maxLengthMessage('vocation', '10')),
    levelRequired: yup
        .string()
        .strict(true)
        .required(BuildMessages.requiredMessage('vocation'))
        .length(10, BuildMessages.maxLengthMessage('vocation', '10')),
    vocation: yup
        .string()
        .strict(true)
        .required(BuildMessages.requiredMessage('vocation'))
        .length(50, BuildMessages.maxLengthMessage('vocation', '50')),
});
