StartupEvents.registry("item", event => {
    event.create("copper_saw", "axe")
    .displayName("Copper Saw")
    .tier("stone")
    .tag("notreepunching:saws")
    .maxDamage(180)
    .attackDamageBaseline(2)
    .speedBaseline(-3.2);

    // add hammers?
})