---
sidebar_position: 3
---

# NUSD & Earn

### What is NUSD?

NUSD is the USD-pegged stablecoin issued by the Nerite protocol. It's decentralized, overcollateralized, and backed only by a basket of crypto native assets.

NUSD is a resilient stablecoin by design:

* Only backed by crypto assets ("no real world assets" like US Treasuries)
* Not subject to collateral changes and protocol upgrades (immutable)
* Directly redeemable for the underlying assets at any time by any one permissionlessly (always convertible in a fast and liquid way)
* Can only be created by users depositing more collateral. 

### What are NUSD's main benefits compared to other stablecoins?

* NUSD is backed by a variety of LSTs, LRTs, plus ETH, ARB, and COMP.
* It is always redeemable for the underlying assets, meaning you can always swap it as if worth $1, for the collateral backing it
* The contracts used to issue NUSD are immutable, not allowing any changes and significantly reducing attack vectors
* NUSD has native incentives via Protocol Incentivized Liquidity (PIL) directed by governance, ensuring that there will always be sufficient liquidity to handle transactions
* NUSD is a streamable super-token, making it perfect for subscriptions, money streaming, annuities, and other specialized use cases.
* NUSD is Arbitrum native, and is built specifically for the fast and cheap Arbitrum network.

### What is NUSD's peg mechanism?

Nerite uses Liquity V2's market-driven monetary policy through user-set interest rates to maintain NUSD's peg and to dynamically respond to situations where the token is above or below $1.00.

When NUSD trades above $1, borrowers tend to reduce their rates due to lower redemption risk, making borrowing more and holding NUSD less attractive. This helps correct the price downwards.

In contrast, when NUSD trades below $1, arbitrageurs will initiate redemptions to restore the peg. Borrowers' exposure to redemption risk prompts them to increase interest rates, boosting demand for NUSD (and Earn deposits) and pushing its price upward.

<figure>
  <img src="/static/img/light - BOLD individual redemption.png" alt="" />
  <figcaption></figcaption>
</figure>

### How can I earn yield with Nerite?

* Stability Pool deposits (Earn): Earn protocol revenue by depositing NUSD into the various Stability Pools.
* Protocol Incentivized Liquidity (PIL): Supply liquidity for NUSD onto the incentivized external DEXes. 
* Stake NERI (coming soon): Accrue voting power over liquidity incentives by staking NERI. On top of directing revenue, NERI stakers can potentially receive bribes (subject to governance vote) from third parties as an added bonus.

### Where does the yield for the Stability Pool deposits come from?

The yield comes from three sources:

1. **Interest payments**: Each borrow-market funnels 75% of the of its revenue to its Stability Pool depositors (Earners). This is paid out in NUSD.
2. **Liquidation fees**: Your NUSD will be used to liquidate under-collateralized loans, effectively buying their collateral with a \~5% discount. This is paid out in (staked) ETH.
3. **Inflationary Incentives**: NERI tokens are added as a bonus inflationary reward to depositors.

All the yield is fully sustainable, scalable and "real", with no token emissions and lockups.

### Is there a lockup period? 

There is no lockup period. Users are free to withdraw their NUSD deposits from the Stability Pool whenever they want.

### What is the estimated yield on Earn? 

The yield is a representation of the rates borrowers are paying. Since 75% of the borrowers' interest payments go to Earn, the effective yield can exceed the average interest rate paid in a borrow market if less than 75% of the NUSD supply is deposited to the respective Stability Pool. This yield amplification sets Liquity V2 apart from competitors and money markets where lending rates cannot be higher than borrow rates.

Check historic rates on Liquity V2 [here](https://dune.com/liquity/liquity-v2#interest-rates).

### Why are there multiple Stability Pools?

The goals are to:

* Establish separate borrow markets for different collateral assets with their own market driven interest rates, using the Stability Pool backing to dynamically split redemptions across the available collaterals (link to "Redemption").
* Compartmentalize the risks as much as possible when depositing to the respective Stability Pools (Earn) by giving the depositors control over which collateral assets they want exposure to in case of liquidations.

### How have Stability Pools evolved in Liquity based systems like Nerite, from Liquity V1 to V2?

In V2, the concept of Stability Pools is expanded to accommodate multiple Liquid Staking Tokens (LSTs) and ETH as collateral, keeping the interest revenue and liquidations proceeds inside the respective borrow market (collateral). Each collateral asset thus has its own Stability Pool to distribute yield to NUSD depositors.

Additionally, user-set interest rates in V2 influence the yield dynamics for  Stability Pools depositors (Earn) as the yield is now fully sustainable coming from user-set interest rates (in NUSD) rather than token emissions.

### How do risks differ for the different Stability Pools?

Users can deposit their stablecoins into the Stability Pool of their choice, aligning with their risk preference and the types of collateral they're comfortable being exposed to. By selecting pools associated with a specific collateral, participants can tailor their risk exposure and potential reward profile.

By offering separate pools for different collateral types, the system allows users to choose their exposure based on the perceived risk and potential returns of each LST or ETH. This compartmentalization helps manage systemic risk, ensuring that impacts from liquidations in one asset class don't disproportionately affect the entire ecosystem.

It is important to note that all NUSD holders including depositors still remain dependent on NUSD to keep its peg, remaining exposed to both all LSTs and ETH.\


:::tip
A Stability Pool aggregation vault is currently under development, to simplify this.
:::