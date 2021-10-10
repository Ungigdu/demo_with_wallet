import { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { useGetApiPrice } from 'state/hooks'
import { useCakeVaultContract } from 'hooks/useContract'
import useRefresh from 'hooks/useRefresh'
import makeBatchRequest from 'utils/makeBatchRequest'
import { getCakeAddress } from 'utils/addressHelpers'

const useGetVaultBountyInfo = () => {
  const { fastRefresh } = useRefresh()
  const cakeVaultContract = useCakeVaultContract()
  const [estimatedDollarBountyReward, setEstimatedDollarBountyReward] = useState(null)
  const [estimatedCakeBountyReward, setEstimatedCakeBountyReward] = useState(null)
  const [totalPendingKusaHarvest, setTotalPendingKusaHarvest] = useState(null)

  const cakePrice = useGetApiPrice(getCakeAddress())

  useEffect(() => {
    const fetchRewards = async () => {
      const [estimatedClaimableCakeReward, pendingTotalCakeHarvest] = await makeBatchRequest([
        cakeVaultContract.methods.calculateHarvestCakeRewards().call,
        cakeVaultContract.methods.calculateTotalPendingKusaRewards().call,
      ])
      if (cakePrice) {
        const dollarValueOfClaimableReward = new BigNumber(estimatedClaimableCakeReward as string).multipliedBy(
          cakePrice,
        )
        setEstimatedDollarBountyReward(dollarValueOfClaimableReward)
      }
      setEstimatedCakeBountyReward(new BigNumber(estimatedClaimableCakeReward as string))
      setTotalPendingKusaHarvest(new BigNumber(pendingTotalCakeHarvest as string))
    }
    fetchRewards()
  }, [cakeVaultContract, cakePrice, fastRefresh])

  return { estimatedCakeBountyReward, estimatedDollarBountyReward, totalPendingKusaHarvest }
}

export default useGetVaultBountyInfo
