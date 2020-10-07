cd build
yarn install && \
yarn clean && \
yarn install && \
yarn install-bower && \
yarn install-npm && \
yarn remove-source-maps
cd ..