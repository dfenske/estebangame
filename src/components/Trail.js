import React from 'react';
import Esteban from './Esteban';

class Trail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg className="trail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 1362">
                <g id="trail">
                  <g id="bush3" fill="#A6D452">
                    <g>
                      <path d="M3866.917 1136.654c64.974-16.385 124.987.088 137.823 39.593 6.303 19.4.137 40.995-15.138 60.903 9.243 8.382 14.36 17.613 14.36 27.308 0 38.36-80.122 69.458-178.96 69.458-98.837 0-178.96-31.097-178.96-69.458 0-12.75 8.85-24.698 24.3-34.968 1.907-19.32 11.888-36.92 28.803-47.084 7.47-4.488 15.585-7.102 23.865-7.985-5.38-37.42 6.956-71.54 34.31-85.48 34.864-17.76 81.906 3.48 109.597 47.72z"/>
                    </g>
                  </g>
                  <g id="bush4" fill="#5B9B12">
                    <g>
                      <path d="M3792.094 1223.68c20.115 11.212 31.906 24.832 31.906 39.52 0 38.292-80.14 69.333-179 69.333s-179-31.04-179-69.333c0-13.146 9.446-25.438 25.853-35.913 2.18-18.882 12.115-36.012 28.723-45.992 11.17-6.71 23.776-9.24 36.217-8.064 4.41-40.1 36.778-71.23 76.054-71.23 41.563 0 75.39 34.87 76.535 78.33 23.69-8.57 50.053-4.07 67.37 13.86 8.074 8.36 13.163 18.59 15.342 29.5z"/>
                    </g>
                  </g>
                  <g id="bush2" fill="#249024">
                    <g>
                      <path d="M534.458 1112.855c66.02 11.46 114.145 50.917 109.803 92.227-2.13 20.287-16.54 37.507-38.6 49.48 5.04 11.418 5.96 21.932 2.02 30.79-15.6 35.043-101.45 30.863-191.74-9.338-90.29-40.2-150.84-101.2-135.24-136.243 5.19-11.64 18.13-18.96 36.42-22.06 9.6-16.87 25.88-28.89 45.47-31.29 8.65-1.06 17.13-.15 25.05 2.41 10.31-36.38 35.46-62.53 66.12-64.13 39.08-2.05 73.41 36.49 80.72 88.17z"/>
                    </g>
                  </g>
                  <g id="bush4" fill="#5B9B12">
                    <g>
                      <path d="M515.094 1216.68C535.21 1227.892 547 1241.512 547 1256.2c0 38.292-80.14 69.333-179 69.333s-179-31.04-179-69.333c0-13.146 9.446-25.438 25.853-35.913 2.18-18.882 12.115-36.012 28.723-45.992 11.17-6.71 23.776-9.24 36.217-8.064 4.41-40.1 36.778-71.23 76.054-71.23 41.563 0 75.39 34.87 76.535 78.33 23.69-8.57 50.053-4.07 67.37 13.86 8.074 8.36 13.163 18.59 15.342 29.5z"/>
                    </g>
                  </g>
                  <g id="flower1">
                    <g transform="translate(464 1248)">
                      <path id="leaves1" fill="#F76E54" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar1" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower2">
                    <g transform="rotate(-29 3595.327 -3762.31)">
                      <path id="leaves2" fill="#6DE5EA" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar2" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower3">
                    <g transform="rotate(-29 2619.44 -321.897)">
                      <path id="leaves3" fill="#CD4963" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar3" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower4">
                    <g transform="rotate(-29 4318.24 -6627.473)">
                      <path id="leaves4" fill="#A83A55" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar4" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower1">
                    <g transform="translate(449 1206)">
                      <path id="leaves1" fill="#F76E54" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar1" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower2">
                    <g transform="rotate(-29 2561.194 371.973)">
                      <path id="leaves2" fill="#6DE5EA" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar2" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower3">
                    <g transform="rotate(-29 4086.473 -5699.395)">
                      <path id="leaves3" fill="#CD4963" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar3" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower1">
                    <g transform="translate(3243 1277)">
                      <path id="leaves1" fill="#F76E54" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar1" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower2">
                    <g transform="rotate(-29 4128.094 -5734.634)">
                      <path id="leaves2" fill="#6DE5EA" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar2" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower2">
                    <g transform="rotate(-29 3178.86 -2215.758)">
                      <path id="leaves2" fill="#6DE5EA" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar2" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower3">
                    <g transform="rotate(-29 3204.606 -2305.42)">
                      <path id="leaves3" fill="#CD4963" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar3" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                  <g id="flower1">
                    <g transform="translate(1513 1279)">
                      <path id="leaves1" fill="#F76E54" d="M15.667 30.53c-1.417.3-2.998.47-4.667.47-6.075 0-11-2.24-11-5s4.925-5 11-5c2.49 0 4.788.376 6.632 1.01-1.285-1.084-2.57-2.49-3.728-4.142C10.42 12.89 9.43 7.573 11.69 5.988c2.263-1.583 6.92 1.168 10.406 6.144.35.5.674 1.003.973 1.506-.08-.9-.1-1.843-.07-2.812.21-6.072 2.62-10.916 5.38-10.82 2.76.097 4.82 5.097 4.61 11.168-.06 1.504-.24 2.93-.54 4.228.69-.762 1.46-1.514 2.32-2.232 4.65-3.905 9.86-5.356 11.64-3.24 1.77 2.115-.56 6.995-5.21 10.9-.53.44-1.06.85-1.59 1.227.42-.03.85-.05 1.29-.056 6.07-.1 11.04 2.05 11.09 4.81.05 2.76-4.84 5.09-10.91 5.19-1.85.04-3.59-.14-5.13-.48 1.08 1 2.15 2.22 3.13 3.62 3.48 4.98 4.47 10.3 2.21 11.88-2.24 1.57-6.83-1.11-10.31-6 0 .06-.01.11-.01.17-.21 6.07-2.62 10.92-5.38 10.82-2.76-.09-4.83-5.09-4.62-11.17.04-1.09.15-2.15.32-3.15-.86 1.08-1.91 2.15-3.11 3.16-4.66 3.91-9.87 5.36-11.64 3.24-1.78-2.11.56-6.99 5.21-10.9 1.28-1.07 2.6-1.96 3.88-2.64zm4.025-1.466c1.65-.28 2.993-.02 3.734.865.3.35.483.79.557 1.29.73-.81 1.55-1.25 2.4-1.22.458.01.895.16 1.307.43.195-.63.526-1.12 1-1.45.485-.34 1.08-.48 1.75-.45-.278-.43-.43-.89-.438-1.36-.014-.8.387-1.57 1.112-2.25-.64-.14-1.167-.43-1.54-.87-.518-.62-.686-1.47-.55-2.47-.452.26-.924.4-1.408.38-.762-.03-1.47-.43-2.094-1.12.026 1.42-.365 2.54-1.213 3.14-.79.54-1.85.57-3.06.17.48.56.74 1.17.74 1.81 0 1.15-.86 2.21-2.31 3.06z"/>
                      <ellipse id="nectar1" cx="25.5" cy="27" fill="#FEEEC5" rx="6.5" ry="6"/>
                    </g>
                  </g>
                </g>
                <g id="coin" ref={(coin) => { this.coin = coin; }}>
                  <path id="Path" fill="#FFD700" d="M1980 734.547c0 22.857 17.96 41.453 40.038 41.453 2.002 0 3.97-.158 5.894-.452h11.203c21.98 0 39.865-18.515 39.865-41.274 0-22.76-17.884-41.274-39.865-41.274h-15.468v.138c-.54-.023-1.083-.042-1.63-.042-22.076-.002-40.037 18.594-40.037 41.45z"/>
                  <path id="Path" fill="#FFD700" d="M1984.43 701.66v.022c0 .096-.008.193-.015.29V702h4.173l-.003-.035c-.007-.093-.014-.188-.016-.28.35-8.293 7.1-14.793 15.43-14.956v-5.46c-8.33-.17-15.08-6.67-15.43-14.94 0-.12 0-.22.01-.31v-.04h-4.18v.03c.01.09.01.19.01.28-.35 8.29-7.1 14.79-15.43 14.95v5.45c8.33.16 15.08 6.66 15.43 14.93z"/>
                  <path id="Path" fill="#FFD700" d="M1970.21 721.833c0-.085-.007-.17-.012-.254l-.01-.16c.218-5.21 4.454-9.29 9.643-9.29h.17v-4.27h-.17c-5.18 0-9.42-4.08-9.64-9.28 0-.06.01-.12.01-.17.01-.09.01-.17.01-.26l-.04-.17h-3.37v.17c0 .08.01.16.01.24.01.05.01.11.01.16-.22 5.21-4.45 9.29-9.64 9.29h-.17v4.26h.17c5.19 0 9.42 4.08 9.65 9.28l-.01.17c0 .08-.01.16-.01.25l.04.17h3.38v-.17z"/>
                  <path id="Shape" fill="#FFAE00" fill-rule="nonzero" d="M1980 734.547c0 22.857 17.96 41.453 40.038 41.453 2.002 0 3.97-.158 5.894-.452h11.203c21.98 0 39.865-18.515 39.865-41.274 0-22.76-17.884-41.274-39.865-41.274h-15.468v.138c-.54-.023-1.083-.042-1.63-.042-22.076-.002-40.037 18.594-40.037 41.45zm58.063 36.996c2.51-1.316 4.867-2.894 7.04-4.705h9.474c-4.913 2.86-10.532 4.545-16.514 4.705zm22.06-8.684h-10.88c2.243-2.48 4.195-5.24 5.8-8.23h12.1c-1.942 3.09-4.31 5.86-7.02 8.22zm9.204-12.21h-12.4c1.07-2.62 1.88-5.37 2.412-8.23h12.76c-.62 2.88-1.56 5.63-2.78 8.22zm3.653-16.38c0 1.41-.083 2.8-.23 4.18h-12.858c.117-1.29.184-2.59.184-3.91 0-1.46-.075-2.9-.22-4.32h12.91c.138 1.33.214 2.68.214 4.04zm-.845-8.03h-12.867c-.564-2.86-1.42-5.61-2.52-8.23h12.646c1.21 2.59 2.132 5.34 2.74 8.22zm-4.91-12.21h-12.41c-1.654-2.99-3.654-5.75-5.95-8.22h11.412c2.685 2.37 5.028 5.14 6.95 8.22zm-30.09-17.07c6.423 0 12.453 1.77 17.672 4.87H2044.6c-2.36-1.91-4.93-3.55-7.667-4.87h.2zm-17.097.09c19.86 0 36.02 16.81 36.02 37.47s-16.16 37.47-36.02 37.47c-19.86 0-36.02-16.81-36.02-37.48s16.16-37.48 36.02-37.48z"/>
                  <path id="Shape" fill="#FFAE00" fill-rule="nonzero" d="M2020.5 762c14.612 0 26.5-12.337 26.5-27.5 0-15.164-11.888-27.5-26.5-27.5s-26.5 12.337-26.5 27.5c0 15.164 11.887 27.5 26.5 27.5zm0-51.022c12.404 0 22.496 10.553 22.496 23.523 0 12.97-10.092 23.53-22.496 23.53-12.404 0-22.496-10.55-22.496-23.52s10.092-23.52 22.496-23.52z"/>
                  <path id="Shape" fill="#FFAE00" fill-rule="nonzero" d="M1984.43 701.66v.022c0 .096-.008.193-.015.29V702h4.173l-.003-.035c-.007-.093-.014-.188-.016-.28.35-8.293 7.1-14.793 15.43-14.956v-5.46c-8.33-.17-15.08-6.67-15.43-14.94 0-.12 0-.22.01-.31v-.04h-4.18v.03c.01.09.01.19.01.28-.35 8.29-7.1 14.79-15.43 14.95v5.45c8.33.16 15.08 6.66 15.43 14.93zm-8.464-17.66l.672-.29c4.07-1.76 7.47-4.852 9.58-8.707l.28-.516.284.516c2.108 3.855 5.51 6.948 9.58 8.706l.67.29-.67.29c-4.07 1.76-7.472 4.85-9.58 8.7l-.283.51-.29-.52c-2.11-3.86-5.51-6.95-9.58-8.71l-.67-.29z"/>
                  <path id="Shape" fill="#FFAE00" fill-rule="nonzero" d="M1970.21 721.833c0-.085-.007-.17-.012-.254l-.01-.16c.218-5.21 4.454-9.29 9.643-9.29h.17v-4.27h-.17c-5.18 0-9.42-4.08-9.64-9.28 0-.06.01-.12.01-.17.01-.09.01-.17.01-.26l-.04-.17h-3.37v.17c0 .08.01.16.01.24.01.05.01.11.01.16-.22 5.21-4.45 9.29-9.64 9.29h-.17v4.26h.17c5.19 0 9.42 4.08 9.65 9.28l-.01.17c0 .08-.01.16-.01.25l.04.17h3.38v-.17zm-7.49-11.83c2.42-1.148 4.453-3.036 5.78-5.364 1.325 2.32 3.36 4.21 5.78 5.36-2.42 1.15-4.454 3.03-5.78 5.36-1.327-2.33-3.36-4.22-5.78-5.37z"/>
                </g>
            </svg>
        );
    }
}

export default Trail;
