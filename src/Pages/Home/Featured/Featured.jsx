import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
  return (
    <div className="featurd-item text-white pt-8 my-20">
      <SectionTitle
        subHeadingTitle={"featured menu"}
        headingTitle={"check it out"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center pb-20 pt-8 px-32 ">
        <div>
          <img src={featured} alt="" />
        </div>

        <div className="md:ml-10">
          <p>aug 23 2023</p>
          <p className="uppercase">where can i get some?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, obcaecati. Autem perspiciatis deleniti nam recusandae? Voluptatum excepturi consectetur sapiente facilis incidunt architecto distinctio aliquid provident cumque, aspernatur dolores consequatur dolorum maxime ab. Voluptatum quae perferendis nihil aliquam. Iusto ab sed maxime veniam, cupiditate incidunt, error eos dolores, numquam inventore mollitia.</p>
          <button className="btn btn-outline">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;