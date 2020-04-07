const contexts = require.context('./svg', false, /\.svg$/);

contexts.keys().map(contexts);