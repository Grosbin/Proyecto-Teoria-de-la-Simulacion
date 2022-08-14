


export const getCPP = (propios, finan, inv, tPropios, tFinan) => {
	const tPartProp = (propios * tPropios) / 100;
	const tPartFinan = (finan * tFinan) / 100;

	const cpp = (tPartProp + tPropios) + (tPartFinan + tFinan);

	return cpp;

}