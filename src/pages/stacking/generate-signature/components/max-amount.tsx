import { useField } from 'formik';
import { Description, Step } from '../../components/stacking-form-step';
import { Box, Button, Input, Text } from '@stacks/ui';
import React from 'react';
import { MAX_U128 } from '../types';
import { ErrorLabel } from '@components/error-label';
import { ErrorText } from '@components/error-text';

export function MaxAmount() {
  const [field, meta, helpers] = useField('maxAmount');
  // const form = useFormikContext<{ topic: string }>();
  const setMax = React.useCallback(() => {
    helpers.setValue(MAX_U128.toString());
  }, [helpers]);
  return (
    <Step title="Max Amount">
      <Description>
        <Text>Enter the maximum amount of STX that can be locked while using this signature</Text>
      </Description>
      <Box position="relative" my="loose">
        <Input id="maxAmount" placeholder="Maximum amount of STX to lock" {...field} />
        {meta.touched && meta.error && (
          <ErrorLabel>
            <ErrorText>{meta.error}</ErrorText>
          </ErrorLabel>
        )}
        <Button
          type="button"
          mode="tertiary"
          size="sm"
          height="28px"
          right="12px"
          top="10px"
          style={{ position: 'absolute' }}
          width="110px"
          onClick={setMax}
          isDisabled={field.value === MAX_U128.toString()}
        >
          Max Amount
        </Button>
      </Box>
    </Step>
  );
}
