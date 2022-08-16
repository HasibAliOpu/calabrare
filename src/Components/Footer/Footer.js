import React from "react";
import Facebook from "../../assets/icon/facebook.svg";
import Pinterest from "../../assets/icon/pinterest.svg";
import Instagram from "../../assets/icon/instagram.svg";
import PlayStore from "../../assets/icon/playstore.svg";

const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 font-sans font-semibold">
        <div>
          <span class="footer-title">
            <img
              src="https://celebrare.in/img/icon_up.jpg"
              alt="company logo"
              className="w-10 ml-10"
            />
            <h1 className="text-2xl">Celebrare</h1>
          </span>
          <p>
            Celebrare is a startup by <br /> Alumni of IIT Hyderabad <br />{" "}
            working in the digital India <br /> sector to transform <br />{" "}
            wedding invitations <br /> market. We have 3,00,000+ <br /> app
            downloads on play <br /> store.
          </p>
        </div>
        <div>
          <span class=" text-black text-2xl font-dancing">Wedding</span>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Save The Date
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            North Indian
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            South Indian
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Sangeet
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Haldi
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Mehandi
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Muslim
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Sikh
          </a>
        </div>
        <div>
          <span class="text-black text-2xl font-dancing">Policy</span>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Policy
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Privacy policy
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Terms of use
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Return, Shipping & <br /> cancellation policy
          </a>
        </div>
        <div>
          <span class="text-black text-2xl font-dancing">Contact Info</span>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            FAQ's
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            About Us
          </a>
          <a
            href="/"
            class="link link-hover hover:text-red-500 ease-in-out hover:scale-105 duration-500"
          >
            Support@celebrare.in
          </a>
        </div>
        <div>
          <span class="text-black text-2xl font-dancing">Stay Connected</span>
          <span className="flex gap-3">
            <a href="/" class="link link-hover">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="/" class="link link-hover">
              <img src={Pinterest} alt="Pinterest" />
            </a>
            <a href="/" class="link link-hover">
              <img src={Facebook} alt="Facebook" />
            </a>
          </span>
          <a
            href="https://play.google.com/store/apps/details?id=com.enjoy.celebrare"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <img
              src={PlayStore}
              alt="PlayStore"
              className="w-6 hover:bg-white"
            />
            <p>
              Get it on <br />
              Google Play
            </p>
          </a>
        </div>
      </footer>
      <footer className="">
        <hr className="mx-10" />
        <p className="p-5 text-center font-bold text-2xl">@Celebrare 2021</p>
      </footer>
    </div>
  );
};

export default Footer;
