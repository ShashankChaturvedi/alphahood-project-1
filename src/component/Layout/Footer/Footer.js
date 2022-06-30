import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="outtt">
      <div className="inn">
        <div className="uppfl">
          <div className="ul">
            <h2 style={{color:"#ffff"}} >Logo</h2>
            <p>
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididun.
            </p>
            <div className="contactSection">
              <div className="cs1">
                <button className="bg-icon">
                  <i className="phone"></i>
                </button>
                <div className="texts">
                  <p>Have a question?</p>
                  <span>310-437-2766</span>
                </div>
              </div>
              <div className="cs1">
                <button className="bg-icon">
                  <i className="mail"></i>
                </button>
                <div className="texts">
                  <p>Contact us at</p>
                  <span>unreal@outlook.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ur">
            <h2 style={{color:"#ffff"}}>Newsletter</h2>
            <p>
              Be the first one to know about discounts, offers and events weekly
              in your mailbox. Unsubscribe whenever you like with one click.
            </p>
            <form action="">
              <i className="mail"></i>
              <input type="text" placeholder="Enter your email"></input>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
        <div className="low">
          <div className="lowerUp">
            <a href="#">About Us</a>

            <a href="#">Jobs</a>

            <a href="#">Blog</a>

            <a href="#">Press</a>

            <a href="#">FAQ</a>

            <a href="#">Careers</a>

            <a href="#">Contact</a>

            <a href="#">Privacy Policy</a>

            <a href="#">Sitemap</a>

            <a href="#">Terms of Use</a>
          </div>
          <div className="lowest">
            <div className="lowestIcons">
              <button className="bg-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6667 7.75V10.1667H13.8333C14 10.1667 14.0833 10.3333 14.0833 10.5L13.75 12.0833C13.75 12.1667 13.5833 12.25 13.5 12.25H11.6667V18.3333H9.16667V12.3333H7.75C7.58333 12.3333 7.5 12.25 7.5 12.0833V10.5C7.5 10.3333 7.58333 10.25 7.75 10.25H9.16667V7.5C9.16667 6.08333 10.25 5 11.6667 5H13.9167C14.0833 5 14.1667 5.08333 14.1667 5.25V7.25C14.1667 7.41667 14.0833 7.5 13.9167 7.5H11.9167C11.75 7.5 11.6667 7.58333 11.6667 7.75Z"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12.5 18.3334H7.50002C3.33335 18.3334 1.66669 16.6667 1.66669 12.5001V7.50008C1.66669 3.33341 3.33335 1.66675 7.50002 1.66675H12.5C16.6667 1.66675 18.3334 3.33341 18.3334 7.50008V12.5001C18.3334 16.6667 16.6667 18.3334 12.5 18.3334Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="bg-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1667 16.6666H5.83332C3.33332 16.6666 1.66666 14.9999 1.66666 12.4999V7.49992C1.66666 4.99992 3.33332 3.33325 5.83332 3.33325H14.1667C16.6667 3.33325 18.3333 4.99992 18.3333 7.49992V12.4999C18.3333 14.9999 16.6667 16.6666 14.1667 16.6666Z"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 7.91676L11.5833 9.16676C12.3333 9.66676 12.3333 10.4168 11.5833 10.9168L9.5 12.1668C8.66667 12.6668 8 12.2501 8 11.3334V8.83342C8 7.75009 8.66667 7.41676 9.5 7.91676Z"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="bg-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4167 3.9917C13.25 7.78337 9.07501 9.95837 4.72501 9.5667L2.08334 9.32503"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.58334 16.1417C6.75001 12.3501 10.925 10.1751 15.275 10.5667L17.9167 10.8084"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99999 18.3334C14.6024 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 9.99999 1.66675C5.39762 1.66675 1.66666 5.39771 1.66666 10.0001C1.66666 14.6025 5.39762 18.3334 9.99999 18.3334Z"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.35834 2.5L9.00834 5.79167C10.7833 7.99167 12.0417 10.55 12.7083 13.2917L13.7167 17.45"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="bg-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99999 1.66675H7.24999C5.66666 1.66675 4.41666 2.91675 4.41666 4.41675C4.41666 5.91675 5.66666 7.16675 7.16666 7.16675H9.99999V1.66675Z"
                    stroke="white"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M10 7.25H7.25C5.75 7.25 4.5 8.5 4.5 10C4.5 11.5 5.75 12.75 7.25 12.75H10V7.25Z"
                    stroke="white"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M10 12.75H7.25C5.75 12.75 4.5 14 4.5 15.5C4.5 17 5.75 18.25 7.25 18.25C8.75 18.25 10 17 10 15.5V12.75Z"
                    stroke="white"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M10 1.66675H12.75C14.25 1.66675 15.5 2.91675 15.5 4.41675C15.5 5.91675 14.25 7.16675 12.75 7.16675H10V1.66675Z"
                    stroke="white"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M12.75 7.25C14.25 7.25 15.5 8.5 15.5 10C15.5 11.5 14.25 12.75 12.75 12.75C11.25 12.75 10 11.5 10 10C10 8.5 11.25 7.25 12.75 7.25Z"
                    stroke="white"
                    strokeMiterlimit="10"
                  />
                </svg>
              </button>
              <button className="bg-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.74999 17.1667C6.99999 17.9167 8.49999 18.3334 9.99999 18.3334C14.5833 18.3334 18.3333 14.5834 18.3333 10.0001C18.3333 5.41675 14.5833 1.66675 9.99999 1.66675C5.41666 1.66675 1.66666 5.41675 1.66666 10.0001C1.66666 11.5001 2.08332 12.9167 2.74999 14.1667L2.1071 16.6394C1.91238 17.3883 2.60558 18.0652 3.34964 17.8526L5.74999 17.1667Z"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.75 12.3737C13.75 12.5087 13.72 12.6475 13.6561 12.7825C13.5923 12.9175 13.5096 13.045 13.4007 13.165C13.2167 13.3675 13.0139 13.5138 12.7848 13.6075C12.5595 13.7013 12.3153 13.75 12.0525 13.75C11.6694 13.75 11.26 13.66 10.8281 13.4763C10.3962 13.2925 9.96432 13.045 9.53618 12.7338C9.10428 12.4188 8.69492 12.07 8.30433 11.6837C7.9175 11.2937 7.56823 10.885 7.25651 10.4575C6.94855 10.03 6.70068 9.6025 6.52041 9.17875C6.34014 8.75125 6.25 8.3425 6.25 7.9525C6.25 7.6975 6.29507 7.45375 6.3852 7.22875C6.47534 7 6.61805 6.79 6.8171 6.6025C7.05746 6.36625 7.32036 6.25 7.59827 6.25C7.70343 6.25 7.80859 6.2725 7.90248 6.3175C8.00013 6.3625 8.0865 6.43 8.15411 6.5275L9.02541 7.75375C9.09301 7.8475 9.14184 7.93375 9.17564 8.01625C9.20944 8.095 9.22822 8.17375 9.22822 8.245C9.22822 8.335 9.20193 8.425 9.14935 8.51125C9.10053 8.5975 9.02917 8.6875 8.93903 8.7775L8.65361 9.07375C8.61229 9.115 8.59352 9.16375 8.59352 9.22375C8.59352 9.25375 8.59727 9.28 8.60478 9.31C8.61605 9.34 8.62732 9.3625 8.63483 9.385C8.70243 9.50875 8.81885 9.67 8.9841 9.865C9.1531 10.06 9.33337 10.2588 9.52867 10.4575C9.73147 10.6563 9.92677 10.84 10.1258 11.0087C10.3211 11.1737 10.4826 11.2862 10.6103 11.3537C10.6291 11.3612 10.6516 11.3725 10.6779 11.3837C10.7079 11.395 10.738 11.3987 10.7718 11.3987C10.8356 11.3987 10.8845 11.3763 10.9258 11.335L11.2112 11.0538C11.3051 10.96 11.3952 10.8887 11.4816 10.8438C11.568 10.7912 11.6544 10.765 11.7482 10.765C11.8196 10.765 11.8947 10.78 11.9773 10.8138C12.06 10.8475 12.1463 10.8963 12.2402 10.96L13.4834 11.8412C13.581 11.9087 13.6486 11.9875 13.6899 12.0812C13.7275 12.175 13.75 12.2687 13.75 12.3737Z"
                    stroke="white"
                    strokeMiterlimit="10"
                  />
                </svg>
              </button>
            </div>
            <p>© 2000-2021, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
