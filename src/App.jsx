import Gallery from 'react-image-gallery';
import './App.css';

const images = [
  {
    original:
      'https://photo-gallery-dasbego.s3.us-east-1.amazonaws.com/Fotos%20Pre%20Boda%20Babies/00f07272-3ba7-47c8-bdaa-e90b9eb50372.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQD6ipW%2FiIFweZnZJfjG6d0hx40Q8dD4ycLTZdxq0hqkmAIhAObuuxygb54xkEJxtyWLU8448R5rovO9IgwmVRk0X8CAKvsCCE0QAxoMMzMwNzg2MjI5MDQxIgwiJ%2BbAajCP04MzrdMq2AIZnepUxyT47RiTX4LtUIALWiXa7ewccHiLPb10PivJmRoYvyJleVQbcTU4QauZu%2B7zLYwdkVUo62wS%2FPpDitG35PdMNOpAHbf9BikEoOO5RjKu9iRjPQzJGmLDMpKDFNOTb7XbmFNvDakwUT0qg3GcggVYQG%2BTHilIp%2BKuxOKW8GB2U79n2whe7ViU5T1%2ByHfG6vSvRtF0ju65INry8JPgHc8n%2FJKeqYExw%2Fuu930EMB9vi6mWUFFW736ePREaRpDRNFMjLkk9InDvYGT11bYMBK9qa0JMRWEZOkOd%2BZr4OSCCwC5QyrKqVU78a9NGRg8wXp99O2xnYT39aiBhNgTb79BxjuzXCaYVDuleEV156Zn4zA5%2F59w8bnaISBL6tUZuX1fsVV4qqmsuiVMVKDGrGi3%2BWK1msL1X52JBc1fvMSv%2FKNaaHJELcbMo4jj%2BE6srlln93LDsRjDMx6OgBjqyAj3hFfHG%2FLDXyzisWSCtOLFm8RG3EETj4BGkykya8WxJRDahFGT6HalSdDUv34ZYzqVrggsDI4VOsqby3BooVZvP9tJ8eA%2BBOnsKf6L3C0%2BAuBZgcb8tALQ8YOzMvokkIQZoA%2BixslIRDHx2Ut%2FhxWOxzW%2FP6Ka%2FStLTxxDNLVomauHQGLGeOkoNfVoFp5utU%2FmaKQkxcd3xMmvS7nDuPmxuKbGT0OBzFSXf2r3FZui2FQGH9t6ItUtG7rZstuHe1%2BUNZqwF7%2BFqjxUi7%2FBmJib0DymjMDoYmJOVAyJPq5MiUcxJhYl0e4byvHj3C6VwZPw9MotctHoYfqjExL5XhM5gUMksplaATEInJJM4dDIiTKoDfLVVHFdTILj0krI%2B0FyJQDf7c8un4Rlubn%2B17YQu3Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230308T195126Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAU2BDFJMY7CVXJ36Y%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d6f78fe475d3e9c952b14e8981e5af6a3851aa20efc3589247efaf651b2e061',
  },
];

function App() {
  return (
    <div className="App">
      <Gallery items={images} />
    </div>
  );
}

export default App;
