import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full cursor-grab">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>紹介</p>
        <h2 className={styles.sectionHeadText}>概要</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        私はシニアフルスタックCMS開発者で、JavaScriptフレームワーク、モバイルフレームワーク、
        コンテンツ管理システムなどの最新の技術を使用してWebアプリケーションを開発および維持するための豊富な経験を持っています。   <br />
        私はReactとPythonを使ったフロントエンドとバックエンド開発の両方に精通しています。 私はShopifyとWordPressを使って複数のWebアプリケーションを開発しました。 
        私はコミュニケーション能力が高く、チーム環境でうまく働くことができます。 <br />
        <br />
        {/* <span className="bg-gradient-to-r from-purple-500 to-purple-900 text-white">
          Developed this website using Three.js, React.js, and Tailwind CSS.
        </span>{" "} */}
        <span className="bg-gradient-to-r text-white">
        私はThree.js、React.js、Tailwind CSSを使ってこのウェブサイトを開発しました。
        </span>{" "} <br />
        コーディングに加えて、サッカー、ギター、写真、ビデオ編集をお楽しみください。 <br />
        私は継続的な成長に熱心であり、常に新しい技術とフレームワークを探求することに熱心です。 意味のあるプロジェクトを一緒にリンクしてコラボレーション！
      </motion.p>

      {/* Cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
