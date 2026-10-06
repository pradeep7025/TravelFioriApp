sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"travelfioriapp/test/integration/pages/ZTRAVEL_C_PROCESSOR_MList.gen",
	"travelfioriapp/test/integration/pages/ZTRAVEL_C_PROCESSOR_MObjectPage.gen"
], function (JourneyRunner, ZTRAVEL_C_PROCESSOR_MListGenerated, ZTRAVEL_C_PROCESSOR_MObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('travelfioriapp') + '/test/flp.html#app-preview',
        pages: {
			onTheZTRAVEL_C_PROCESSOR_MListGenerated: ZTRAVEL_C_PROCESSOR_MListGenerated,
			onTheZTRAVEL_C_PROCESSOR_MObjectPageGenerated: ZTRAVEL_C_PROCESSOR_MObjectPageGenerated
        },
        async: true
    });

    return runner;
});

