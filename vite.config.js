import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default {
    plugins: [vanillaExtractPlugin()],
    ssr: {
        noExternal: ['braid-design-system'],
        external: [
            '@vanilla-extract/css',
            '@vanilla-extract/css-utils',
            'assert',
            'clsx',
            'csstype',
            'dedent',
            'gradient-parser',
            'is-mobile',
            'polished',
            'react-focus-lock',
            'react-popper-tooltip',
            'react-remove-scroll',
            'utility-types',
            'uuid',
            'lodash',
            'autosuggest-highlight',

            // Uncomment to fix the issue
            // 'lodash/mapValues',
            // 'lodash/values',
            // 'lodash/omit',
            // 'lodash/merge',
            // 'autosuggest-highlight/parse',
            // 'autosuggest-highlight/match'
        ]
    }
}