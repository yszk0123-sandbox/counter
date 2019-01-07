import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '../../../components/Icon';
import { CenterLayout } from '../../components/layouts/CenterLayout';
import { FullLayout } from '../../components/layouts/FullLayout';
import { styled } from '../../styled-components';
import { RoutingGlobalState } from '../RoutingState';
import { Page } from '../RoutingType';

interface Props {
  page: Page;
  loading: boolean;
}

const Center = styled(CenterLayout)`
  font-size: 96px;
  color: ${({ theme }) => theme.loadingColorFg};
`;

const defaultLoadingContent = (
  <Center>
    <Icon icon="spinner" spin={true} pulse={true} />
  </Center>
);

const PageLoading: React.FunctionComponent<Props> = ({ page, loading }) => {
  const { content, loading: loadingContent = defaultLoadingContent } = page;

  const finalContent = loading ? loadingContent : content;

  return <FullLayout>{finalContent}</FullLayout>;
};

interface State extends RoutingGlobalState {}

function mapState(state: State) {
  const { loading } = state.routing;

  return {
    loading,
  };
}

export const PageLoadingContainer = connect(mapState)(PageLoading);
