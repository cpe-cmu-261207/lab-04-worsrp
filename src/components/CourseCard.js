export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <>
  <p>
  <section class="result">
      <article>Class Name: {props.name}</article>
      <nav>GPA : {props.grd}</nav>
      <nav>Credits : {props.crd}</nav>
      <nav class="tail"><button onClick = {() =>props.del(props.name)} > x </button></nav>
   </section>
   </p>
  </>;
};