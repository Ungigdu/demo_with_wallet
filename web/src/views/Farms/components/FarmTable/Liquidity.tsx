import React from 'react'
import styled from 'styled-components'
import { HelpIcon, Text, Skeleton, useTooltip } from 'components/uikit'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'

const ReferenceElement = styled.div`
  display: inline-block;
`

export interface LiquidityProps {
  liquidity: BigNumber
}

const LiquidityWrapper = styled.div`
  min-width: 110px;
  font-weight: 600;
  text-align: right;
  margin-right: 14px;

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: left;
    margin-right: 0;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Liquidity: React.FunctionComponent<LiquidityProps> = ({ liquidity }) => {
  let displayLiquidity = (<Skeleton width={60} />)
  if (liquidity && liquidity.gte(0.01)) {
    displayLiquidity = (<span>${Number(liquidity).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>)
  }
  if (liquidity && liquidity.lt(0.01)) {
    displayLiquidity = (<span>&lt; $0.01</span>)
  }
  const { t } = useTranslation()
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t('The total value of the funds in this farm’s liquidity pool'),
    { placement: 'top-end', tooltipOffset: [20, 10] },
  )

  return (
    <Container>
      <LiquidityWrapper>
        <Text>{displayLiquidity}</Text>
      </LiquidityWrapper>
      <ReferenceElement ref={targetRef}>
        <HelpIcon color="textSubtle" />
      </ReferenceElement>
      {tooltipVisible && tooltip}
    </Container>
  )
}

export default Liquidity
