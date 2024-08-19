import logo from "./assets/logo.svg";
import mail from "./assets/mail-icon.svg";
import shuffle from "./assets/shuffle-icon.svg";
import home from "./assets/home-icon.svg";
import section1 from "./assets/1st-section.svg";
import section2 from "./assets/2nd-section.svg";
import Service from "./components/Service";
import service1 from "./assets/component-1.svg";
import service2 from "./assets/component-2.svg";
import service3 from "./assets/component-3.svg";

export default function App() {
  const navLinks = [
    "Services",
    "Product",
    "Technology",
    "About",
    "Client",
    "Partner",
  ];

  return (
    <div className="wrapper">
      <div className="shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
        <nav className="flex max-w-[1126px] m-auto justify-between items-center py-[20px]">
          <img src={logo} alt="Logo" />
          <ul className="flex gap-[50px]">
            {navLinks.map((name, index) => {
              return (
                <li key={index}>
                  <a href="#">{name}</a>
                </li>
              );
            })}
          </ul>

          <div className="flex gap-[24px]">
            <img src={home} alt="" />
            <img src={mail} alt="" />
            <img src={shuffle} alt="" />
          </div>
        </nav>
      </div>

      <section className="flex mt-[124px] justify-center gap-[20px] items-center max-w-[1126px] m-auto mb-[100px]">
        <div className="flex flex-col items-start gap-[24px]">
          <h1 className="text-[#1F2E35] text-[48px] w-[545px] font-[700] leading-[133.7%]">
            Making the most of the ever-growing <br />
            <span className="text-[#EE4248]">Information Technology</span>
          </h1>
          <p className="w-[524px] text-[20px] text-[#30444E] leading-[144.7%]">
            Managed by a team of professional experts with extensive <br />
            experience and impressive track records
          </p>
          <button className="bg-[#EE4248] text-white w-[161px] h-[53px]">
            Read More
          </button>
        </div>

        <img src={section1} alt="" />
      </section>

      <section className="bg-[#F6F6F6] h-[500px] mb-[96px]">
        <div className="flex max-w-[1126px] m-auto items-center justify-center gap-[82px]">
          <img src={section2} alt="" />
          <div>
            <h1 className="text-[#1F2E35] text-[32px] font-[500] leading-[133.7%] w-[454px] mb-[24px]">
              Welcome to{" "}
              <span className="text-[#EE4248]">
                Dwidasa Samsara Indonesia (DSI)
              </span>
            </h1>

            <p className="w-[520px] text-[18px] text-[#30444E] leading-[150%]">
              Dwidasa Samsara Indonesia (DSI) was firstly established in 2010{" "}
              <br />
              by the founders, who each of them has a common end objective{" "}
              <br />
              to innovate new creations by making the most of the <br />
              ever-growing information technology through{" "}
              <span className="text-[#EE4248]">DSI’s</span> distinct front-end
              based application concept <br />
              <br />
              Managed by a team of professional experts with extensive
              experience and impressive track records,{" "}
              <span className="text-[#EE4248]">DSI</span> believes that
              continuous improvements and innovations assure your business to
              run effectively and efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-col items-center mb-[90px]">
        <h1 className="mb-[30px] text-[32px] text-[#1F2E35] font-[500]">
          Products and Service
        </h1>

        <div className="flex justify-center gap-[30px]">
          <Service
            img={service1}
            heading={"Our Product"}
            text={
              "Our product is made on the base of our team’s careful research and analyses, ranging from internet based application."
            }
            width={319}
          />

          <Service
            img={service2}
            heading={"Our Service"}
            text={
              "DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors."
            }
            width={329}
          />

          <Service
            img={service3}
            heading={"Our Technology"}
            text={
              "First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices."
            }
            width={329}
          />
        </div>
      </section>

      <footer className="flex items-center gap-[47px] mb-[20px]">
        <div className="ml-[157px]">
          <img src={logo} alt="" className="mb-[10px]" />
          <h1 className="mb-[8px] font-[500] text-[18px] text-[#263238]">
            PT Dwidasa Samsara Indonesia
          </h1>
          <p className="w-[317px] text-[18px] h-[54px] leading-[149.2%] text-[#263238] font-[300]">
            Ruko Jalur Sutera 29A No. 53 <br />
            Alam Sutera Serpong, Tangerang 15323
          </p>
        </div>

        <div>
          <h1 className="font-[500] text-[24px] text-[#263238] mb-[15px]">
            Contact
          </h1>
          <p className="w-[269px] text-[18px] h-[81px] leading-[149.2%] text-[#263238] font-[300]">
            Phone : +62.21.5314.1135 <br />
            Fax : +62.21.5314.1135 <br />
            Email : community@dwidasa.com
          </p>
        </div>
      </footer>

      <pre className="w-full bg-[#EE4248] text-white h-[64px] flex justify-center items-center text-[18px] font-['Roboto']">
        Copyright © 2015 -{" "}
        <span className="font-[500]">Dwidasa Samsara Indonesia</span>
      </pre>
    </div>
  );
}
