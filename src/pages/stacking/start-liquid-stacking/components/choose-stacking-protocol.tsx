import { Stack, Text } from '@stacks/ui';
import { useField } from 'formik';

import { OpenExternalLinkInNewTab } from '@components/external-link';

import { Description, Step } from '../../components/stacking-form-step';
import { ProtocolName } from '../types-preset-protocols';
import { protocols } from './preset-protocols';
import { ProtocolSelectItem } from './protocol-select-item';

interface ChooseStackingProtocolProps {
  onProtocolChange: (val: ProtocolName) => void;
}
export function ChooseStackingProtocol({ onProtocolChange }: ChooseStackingProtocolProps) {
  const [fieldProtocolName, , helpersProtocolName] = useField('protocolName');
  const onChange = (protocolName: ProtocolName) => {
    helpersProtocolName.setValue(protocolName);
    onProtocolChange(protocolName);
  };
  return (
    <Step title="Liquid Stacking">
      <Description>
        <Text>
          Select a protocol to start liquid stacking or{' '}
          <OpenExternalLinkInNewTab display="inline" href="https://www.stacks.co/learn/stacking">
            discover others on stacks.co.
          </OpenExternalLinkInNewTab>
        </Text>
      </Description>

      <Stack spacing="base" mt="extra-loose">
        {(Object.keys(protocols) as ProtocolName[]).map(
          (protocolName: ProtocolName, index: number) => {
            const p = protocols[protocolName];
            return (
              <ProtocolSelectItem
                name={p.name}
                icon={p.icon}
                description={p.description}
                url={p.website}
                key={index}
                activeProtocolName={fieldProtocolName.value}
                onChange={onChange}
              />
            );
          }
        )}
      </Stack>
    </Step>
  );
}