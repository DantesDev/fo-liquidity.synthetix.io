"use strict";(globalThis.webpackChunk_snx_v3_liquidity=globalThis.webpackChunk_snx_v3_liquidity||[]).push([[965],{30965:e=>{e.exports=JSON.parse('["error ImplementationIsSterile(address implementation)","error NoChange()","error NotAContract(address contr)","error NotNominated(address addr)","error Unauthorized(address addr)","error UpgradeSimulationFailed()","error ZeroAddress()","event OwnerChanged(address oldOwner, address newOwner)","event OwnerNominated(address newOwner)","event Upgraded(address indexed self, address implementation)","function acceptOwnership()","function getImplementation() view returns (address)","function nominateNewOwner(address newNominatedOwner)","function nominatedOwner() view returns (address)","function owner() view returns (address)","function renounceNomination()","function simulateUpgradeTo(address newImplementation)","function upgradeTo(address newImplementation)","error FeatureUnavailable(bytes32 which)","error InvalidMarketOwner()","error InvalidSynthImplementation(uint256 synthImplementation)","error MismatchAssociatedSystemKind(bytes32 expected, bytes32 actual)","error MissingAssociatedSystem(bytes32 id)","error OnlyMarketOwner(address marketOwner, address sender)","error OverflowInt256ToUint256()","event AssociatedSystemSet(bytes32 indexed kind, bytes32 indexed id, address proxy, address impl)","event DecayRateUpdated(uint128 indexed marketId, uint256 rate)","event MarketNominationRenounced(uint128 indexed marketId, address nominee)","event MarketOwnerChanged(uint128 indexed marketId, address oldOwner, address newOwner)","event MarketOwnerNominated(uint128 indexed marketId, address newOwner)","event SynthImplementationSet(address synthImplementation)","event SynthImplementationUpgraded(uint256 indexed synthMarketId, address indexed proxy, address implementation)","event SynthPriceDataUpdated(uint256 indexed synthMarketId, bytes32 indexed buyFeedId, bytes32 indexed sellFeedId, uint256 strictStalenessTolerance)","event SynthRegistered(uint256 indexed synthMarketId, address synthTokenAddress)","event SynthetixSystemSet(address synthetix, address usdTokenAddress, address oracleManager)","function acceptMarketOwnership(uint128 synthMarketId)","function createSynth(string tokenName, string tokenSymbol, address synthOwner) returns (uint128 synthMarketId)","function getAssociatedSystem(bytes32 id) view returns (address addr, bytes32 kind)","function getMarketOwner(uint128 synthMarketId) view returns (address marketOwner)","function getNominatedMarketOwner(uint128 synthMarketId) view returns (address marketOwner)","function getPriceData(uint128 synthMarketId) view returns (bytes32 buyFeedId, bytes32 sellFeedId, uint256 strictPriceStalenessTolerance)","function getSynth(uint128 marketId) view returns (address synthAddress)","function getSynthImpl(uint128 marketId) view returns (address implAddress)","function initOrUpgradeNft(bytes32 id, string name, string symbol, string uri, address impl)","function initOrUpgradeToken(bytes32 id, string name, string symbol, uint8 decimals, address impl)","function minimumCredit(uint128 marketId) view returns (uint256 lockedAmount)","function name(uint128 marketId) view returns (string marketName)","function nominateMarketOwner(uint128 synthMarketId, address newNominatedOwner)","function registerUnmanagedSystem(bytes32 id, address endpoint)","function renounceMarketNomination(uint128 synthMarketId)","function renounceMarketOwnership(uint128 synthMarketId)","function reportedDebt(uint128 marketId) view returns (uint256 reportedDebtAmount)","function setDecayRate(uint128 marketId, uint256 rate)","function setSynthImplementation(address synthImplementation)","function setSynthetix(address synthetix)","function supportsInterface(bytes4 interfaceId) view returns (bool isSupported)","function updatePriceData(uint128 synthMarketId, bytes32 buyFeedId, bytes32 sellFeedId, uint256 strictPriceStalenessTolerance)","function upgradeSynthImpl(uint128 marketId)","error ExceedsMaxSynthAmount(uint256 maxSynthAmount, uint256 synthAmountCharged)","error ExceedsMaxUsdAmount(uint256 maxUsdAmount, uint256 usdAmountCharged)","error InsufficientAmountReceived(uint256 expected, uint256 current)","error InvalidMarket(uint128 marketId)","error InvalidPrices()","error OverflowUint256ToInt256()","event SynthBought(uint256 indexed synthMarketId, uint256 synthReturned, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees, uint256 collectedFees, address referrer, uint256 price)","event SynthSold(uint256 indexed synthMarketId, uint256 amountReturned, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees, uint256 collectedFees, address referrer, uint256 price)","function buy(uint128 marketId, uint256 usdAmount, uint256 minAmountReceived, address referrer) returns (uint256 synthAmount, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","function buyExactIn(uint128 marketId, uint256 usdAmount, uint256 minAmountReceived, address referrer) returns (uint256 synthAmount, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","function buyExactOut(uint128 marketId, uint256 synthAmount, uint256 maxUsdAmount, address referrer) returns (uint256 usdAmountCharged, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","function getMarketSkew(uint128 marketId) view returns (int256 marketSkew)","function quoteBuyExactIn(uint128 marketId, uint256 usdAmount, uint8 stalenessTolerance) view returns (uint256 synthAmount, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","function quoteBuyExactOut(uint128 marketId, uint256 synthAmount, uint8 stalenessTolerance) view returns (uint256 usdAmountCharged, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","function quoteSellExactIn(uint128 marketId, uint256 synthAmount, uint8 stalenessTolerance) view returns (uint256 returnAmount, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","function quoteSellExactOut(uint128 marketId, uint256 usdAmount, uint8 stalenessTolerance) view returns (uint256 synthToBurn, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","function sell(uint128 marketId, uint256 synthAmount, uint256 minUsdAmount, address referrer) returns (uint256 usdAmountReceived, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","function sellExactIn(uint128 marketId, uint256 synthAmount, uint256 minAmountReceived, address referrer) returns (uint256 returnAmount, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","function sellExactOut(uint128 marketId, uint256 usdAmount, uint256 maxSynthAmount, address referrer) returns (uint256 synthToBurn, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","error IneligibleForCancellation(uint256 timestamp, uint256 expirationTime)","error InsufficientSharesAmount(uint256 expected, uint256 actual)","error InvalidAsyncTransactionType(uint8 transactionType)","error InvalidClaim(uint256 asyncOrderId)","error InvalidCommitmentAmount(uint256 minimumAmount, uint256 amount)","error InvalidSettlementStrategy(uint256 settlementStrategyId)","error OrderAlreadySettled(uint256 asyncOrderId, uint256 settledAt)","event OrderCancelled(uint128 indexed marketId, uint128 indexed asyncOrderId, tuple(uint128 id, address owner, uint8 orderType, uint256 amountEscrowed, uint256 settlementStrategyId, uint256 commitmentTime, uint256 minimumSettlementAmount, uint256 settledAt, address referrer) asyncOrderClaim, address indexed sender)","event OrderCommitted(uint128 indexed marketId, uint8 indexed orderType, uint256 amountProvided, uint128 asyncOrderId, address indexed sender, address referrer)","function cancelOrder(uint128 marketId, uint128 asyncOrderId)","function commitOrder(uint128 marketId, uint8 orderType, uint256 amountProvided, uint256 settlementStrategyId, uint256 minimumSettlementAmount, address referrer) returns (tuple(uint128 id, address owner, uint8 orderType, uint256 amountEscrowed, uint256 settlementStrategyId, uint256 commitmentTime, uint256 minimumSettlementAmount, uint256 settledAt, address referrer) asyncOrderClaim)","function getAsyncOrderClaim(uint128 marketId, uint128 asyncOrderId) pure returns (tuple(uint128 id, address owner, uint8 orderType, uint256 amountEscrowed, uint256 settlementStrategyId, uint256 commitmentTime, uint256 minimumSettlementAmount, uint256 settledAt, address referrer) asyncOrderClaim)","error InvalidSettlementStrategy(uint8 strategyType)","error InvalidVerificationResponse()","error MinimumSettlementAmountNotMet(uint256 minimum, uint256 actual)","error OutsideSettlementWindow(uint256 timestamp, uint256 startTime, uint256 expirationTime)","error OverflowUint256ToUint64()","error SettlementStrategyNotFound(uint8 strategyType)","event OrderSettled(uint128 indexed marketId, uint128 indexed asyncOrderId, uint256 finalOrderAmount, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees, uint256 collectedFees, address indexed settler, uint256 price, uint8 orderType)","function settleOrder(uint128 marketId, uint128 asyncOrderId) returns (uint256 finalOrderAmount, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","error InvalidSettlementWindowDuration(uint256 duration)","event SettlementStrategyAdded(uint128 indexed synthMarketId, uint256 indexed strategyId)","event SettlementStrategySet(uint128 indexed synthMarketId, uint256 indexed strategyId, tuple(uint8 strategyType, uint256 settlementDelay, uint256 settlementWindowDuration, address priceVerificationContract, bytes32 feedId, string url, uint256 settlementReward, uint256 priceDeviationTolerance, uint256 minimumUsdExchangeAmount, uint256 maxRoundingLoss, bool disabled) strategy)","function addSettlementStrategy(uint128 marketId, tuple(uint8 strategyType, uint256 settlementDelay, uint256 settlementWindowDuration, address priceVerificationContract, bytes32 feedId, string url, uint256 settlementReward, uint256 priceDeviationTolerance, uint256 minimumUsdExchangeAmount, uint256 maxRoundingLoss, bool disabled) strategy) returns (uint256 strategyId)","function getSettlementStrategy(uint128 marketId, uint256 strategyId) view returns (tuple(uint8 strategyType, uint256 settlementDelay, uint256 settlementWindowDuration, address priceVerificationContract, bytes32 feedId, string url, uint256 settlementReward, uint256 priceDeviationTolerance, uint256 minimumUsdExchangeAmount, uint256 maxRoundingLoss, bool disabled) settlementStrategy)","function setSettlementStrategy(uint128 marketId, uint256 strategyId, tuple(uint8 strategyType, uint256 settlementDelay, uint256 settlementWindowDuration, address priceVerificationContract, bytes32 feedId, string url, uint256 settlementReward, uint256 priceDeviationTolerance, uint256 minimumUsdExchangeAmount, uint256 maxRoundingLoss, bool disabled) strategy)","function setSettlementStrategyEnabled(uint128 marketId, uint256 strategyId, bool enabled)","error FailedTransfer(address from, address to, uint256 value)","error InvalidCollateralType(address configuredCollateralType)","error WrapperExceedsMaxAmount(uint256 maxWrappableAmount, uint256 currentSupply, uint256 amountToWrap)","event SynthUnwrapped(uint256 indexed synthMarketId, uint256 amountUnwrapped, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees, uint256 feesCollected)","event SynthWrapped(uint256 indexed synthMarketId, uint256 amountWrapped, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees, uint256 feesCollected)","event WrapperSet(uint256 indexed synthMarketId, address indexed wrapCollateralType, uint256 maxWrappableAmount)","function getWrapper(uint128 marketId) view returns (address wrapCollateralType, uint256 maxWrappableAmount)","function setWrapper(uint128 marketId, address wrapCollateralType, uint256 maxWrappableAmount)","function unwrap(uint128 marketId, uint256 unwrapAmount, uint256 minAmountReceived) returns (uint256 returnCollateralAmount, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","function wrap(uint128 marketId, uint256 wrapAmount, uint256 minAmountReceived) returns (uint256 amountToMint, tuple(uint256 fixedFees, uint256 utilizationFees, int256 skewFees, int256 wrapperFees) fees)","error InvalidCollateralLeverage(uint256)","error InvalidFeeCollectorInterface(address invalidFeeCollector)","error InvalidWrapperFees()","event AsyncFixedFeeSet(uint256 indexed synthMarketId, uint256 asyncFixedFee)","event AtomicFixedFeeSet(uint256 indexed synthMarketId, uint256 atomicFixedFee)","event CollateralLeverageSet(uint256 indexed synthMarketId, uint256 collateralLeverage)","event FeeCollectorSet(uint256 indexed synthMarketId, address feeCollector)","event MarketSkewScaleSet(uint256 indexed synthMarketId, uint256 skewScale)","event MarketUtilizationFeesSet(uint256 indexed synthMarketId, uint256 utilizationFeeRate)","event ReferrerShareUpdated(uint128 indexed marketId, address referrer, uint256 sharePercentage)","event TransactorFixedFeeSet(uint256 indexed synthMarketId, address transactor, uint256 fixedFeeAmount)","event WrapperFeesSet(uint256 indexed synthMarketId, int256 wrapFee, int256 unwrapFee)","function getCollateralLeverage(uint128 synthMarketId) view returns (uint256 collateralLeverage)","function getCustomTransactorFees(uint128 synthMarketId, address transactor) view returns (uint256 fixedFeeAmount)","function getFeeCollector(uint128 synthMarketId) view returns (address feeCollector)","function getMarketFees(uint128 synthMarketId) view returns (uint256 atomicFixedFee, uint256 asyncFixedFee, int256 wrapFee, int256 unwrapFee)","function getMarketSkewScale(uint128 synthMarketId) view returns (uint256 skewScale)","function getMarketUtilizationFees(uint128 synthMarketId) view returns (uint256 utilizationFeeRate)","function getReferrerShare(uint128 synthMarketId, address referrer) view returns (uint256 sharePercentage)","function setAsyncFixedFee(uint128 synthMarketId, uint256 asyncFixedFee)","function setAtomicFixedFee(uint128 synthMarketId, uint256 atomicFixedFee)","function setCollateralLeverage(uint128 synthMarketId, uint256 collateralLeverage)","function setCustomTransactorFees(uint128 synthMarketId, address transactor, uint256 fixedFeeAmount)","function setFeeCollector(uint128 synthMarketId, address feeCollector)","function setMarketSkewScale(uint128 synthMarketId, uint256 skewScale)","function setMarketUtilizationFees(uint128 synthMarketId, uint256 utilizationFeeRate)","function setWrapperFees(uint128 synthMarketId, int256 wrapFee, int256 unwrapFee)","function updateReferrerShare(uint128 synthMarketId, address referrer, uint256 sharePercentage)","error ValueAlreadyInSet()","error ValueNotInSet()","event FeatureFlagAllowAllSet(bytes32 indexed feature, bool allowAll)","event FeatureFlagAllowlistAdded(bytes32 indexed feature, address account)","event FeatureFlagAllowlistRemoved(bytes32 indexed feature, address account)","event FeatureFlagDeniersReset(bytes32 indexed feature, address[] deniers)","event FeatureFlagDenyAllSet(bytes32 indexed feature, bool denyAll)","function addToFeatureFlagAllowlist(bytes32 feature, address account)","function getDeniers(bytes32 feature) view returns (address[])","function getFeatureFlagAllowAll(bytes32 feature) view returns (bool)","function getFeatureFlagAllowlist(bytes32 feature) view returns (address[])","function getFeatureFlagDenyAll(bytes32 feature) view returns (bool)","function isFeatureAllowed(bytes32 feature, address account) view returns (bool)","function removeFromFeatureFlagAllowlist(bytes32 feature, address account)","function setDeniers(bytes32 feature, address[] deniers)","function setFeatureFlagAllowAll(bytes32 feature, bool allowAll)","function setFeatureFlagDenyAll(bytes32 feature, bool denyAll)"]')}}]);