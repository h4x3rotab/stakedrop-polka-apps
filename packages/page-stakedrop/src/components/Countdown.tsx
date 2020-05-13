import React from 'react';
import styled from 'styled-components';
import Countdown, {CountdownRenderProps} from 'react-countdown';

import { SummaryBox, CardSummary } from '@polkadot/react-components';

import { useTranslation } from './../translate';

const Headline = styled.div`
  padding: 12px 1em 6px 1em;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
`;

function _StakedropCountdown () {
  const { t } = useTranslation();
  const startDate = new Date('2020-05-15T10:00:00Z');
  const now = new Date();

  function renderCountdown (props :CountdownRenderProps): React.ReactNode {
    return (
      <>
        {['days', 'hours', 'minutes', 'seconds'].map((p, idx) => {
          const value = (props as unknown as {[key: string]: number})[p].toString();
          return (
          <CardSummary label={t(p)} key={idx}>
            {value.padStart(2, '0')}
          </CardSummary>
        )})}
      </>
    );
  }

  return now < startDate ? (
    <section>
      <Headline>{t('KSM x PHA Stakedrop will start in')}:</Headline>
      <SummaryBox>
        <Countdown date={startDate} renderer={renderCountdown} />
      </SummaryBox>
    </section>
  ) : null;
}

const StakedropCountdown = _StakedropCountdown;
// const StakedropCountdown = styled(_StakedropCountdown)`
//   margin-bottom: 12px;
// `;

export default React.memo(StakedropCountdown);
