import React from "react";

function CardsLoading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="m-auto py-9">
        {/* ICON FROM By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL */}
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          xmlns="http://www.w3.org/2000/svg"
          className="m-auto block max-w-sm w-96"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(2 1)" stroke="#333" stroke-width="1.5">
              <circle
                cx="42.601"
                cy="11.462"
                r="5"
                fill-opacity="1"
                fill="#333"
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="1;0;0;0;0;0;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="49.063"
                cy="27.063"
                r="5"
                fill-opacity="0"
                fill="#333"
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;1;0;0;0;0;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="42.601"
                cy="42.663"
                r="5"
                fill-opacity="0"
                fill="#333"
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;1;0;0;0;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#333">
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;0;1;0;0;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="11.399"
                cy="42.663"
                r="5"
                fill-opacity="0"
                fill="#333"
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;0;0;1;0;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#333">
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;0;0;0;1;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="11.399"
                cy="11.462"
                r="5"
                fill-opacity="0"
                fill="#333"
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;0;0;0;0;1;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#333">
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;0;0;0;0;0;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        </svg>
        <p className="py-8 text-center">Fetching data may take some time</p>
      </div>
    );
  };
}

export default CardsLoading;
