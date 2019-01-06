import React from 'react';
import { CenterLayout } from '../../../app/components/layouts/CenterLayout';
import { VerticalStackLayout } from '../../../app/components/layouts/VerticalStackLayout';
import { Button } from '../../../components/Button';
import { Text } from '../../../components/Text';
import { styled } from '../../../styled-components';

const Layout = styled(CenterLayout)`
  margin-top: ${({ theme }) => theme.space};
`;

const CountLayout = styled(Text)`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.space};
`;

const ButtonGroupLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.space};

  & > ${Button} {
    margin: 0 ${({ theme }) => theme.space};
  }
`;

interface Props {
  count: number;
  loading: boolean;
  increment(): void;
  incrementByTen(): void;
}

export const CounterPage: React.FunctionComponent<Props> = ({
  count,
  loading,
  increment,
  incrementByTen,
}) => {
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Layout>
      <VerticalStackLayout>
        <CountLayout>Count: {count}</CountLayout>
        <ButtonGroupLayout>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={incrementByTen}>Increment by 10</Button>
        </ButtonGroupLayout>
      </VerticalStackLayout>
    </Layout>
  );
};
