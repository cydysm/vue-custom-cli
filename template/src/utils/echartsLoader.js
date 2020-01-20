export default function EChartsLoader() {
  return new Promise((resolve, reject) => {
    if (window.echarts) {
      resolve(window.echarts);
    } else {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://cdn.bootcss.com/echarts/4.4.0-rc.1/echarts.min.js";
      script.onerror = reject;
      document.head.appendChild(script);
    }
    window.initEchart = () => {
      resolve(window.echarts);
    };
  });
}
