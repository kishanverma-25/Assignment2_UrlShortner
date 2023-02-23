import Card from "../UI/Card/Card";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <Card className={classes.about}>
      <h2>About Us</h2>
      <h5>
        Tiger Analytics specializes in building AI and data science solutions
        that enable enterprises to generate business value from data. The
        company brings deep expertise in marketing science, customer analytics,
        operations analytics, and risk analytics, and is a trusted partner for
        several Fortune 500 companies
      </h5>
      <address className={classes.address}>
        visit at our
        <a href="https://www.tigeranalytics.com/"> Official Website</a> for more
        info
        <br /> office Adreess:RMZ Millenia Business Park 2, Campus 5, 2nd Floor,
        No. 143, Kandanchavadi, MGR Road, Perungudi, Chennai, Tamil Nadu 600096.
        <br />
        Call us: 040 8508 4430
      </address>
    </Card>
  );
};
export default AboutUs;
