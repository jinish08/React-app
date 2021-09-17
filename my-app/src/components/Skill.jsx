import React from "react";
import Scard from "./Scard";

function Skill() {
  return (
    <>
      <div className="skill py-5 container-fluid">
        <div className="skill-h pt-4 text-center">
          <h1>The 5 Skills Taught through Jolly Phonics</h1>
          <p>Start your journey today for a bright future</p>
        </div>
        <div className="skill-c row">
          <Scard 
              img="https://images.squarespace-cdn.com/content/v1/5e81cbf7dc34fb6814e3f255/1585915815834-7C79G3UQ7H9IFSI4D0WK/ke17ZwdGBToddI8pDm48kOhyb-WqUH9mdIhg2m6kWrF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWwUtYZN6N1of5YrRfIenmBfq6gqrCb3uifgAuS3iO70P7cJNZlDXbgJNE9ef52e8w/sounds.png?format=500w"
              title="Sounds"
              text="Children are taught the sounds that the different letters name, and not the names of the letters. In Jolly Phonics, 42 different sounds are taught."
          />
          <Scard 
              img="https://images.squarespace-cdn.com/content/v1/5e81cbf7dc34fb6814e3f255/1585915858789-NCT3DU0SH5MSYU3BDHGC/ke17ZwdGBToddI8pDm48kOhyb-WqUH9mdIhg2m6kWrF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWwUtYZN6N1of5YrRfIenmBfq6gqrCb3uifgAuS3iO70P7cJNZlDXbgJNE9ef52e8w/formation.png?format=500w"
              title="Formation"
              text="Children are taught how to form (write) letters using a pencil. They are taught the “froggy legs” pencil grip to ensure that they have neat writing."
          />
          <Scard 
              img="https://images.squarespace-cdn.com/content/v1/5e81cbf7dc34fb6814e3f255/1585915847085-3H5A3NVTA47MFPGOHV70/ke17ZwdGBToddI8pDm48kOhyb-WqUH9mdIhg2m6kWrF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWwUtYZN6N1of5YrRfIenmBfq6gqrCb3uifgAuS3iO70P7cJNZlDXbgJNE9ef52e8w/blending.png?format=500w"
              title="Blending"
              text="Children are taught how to blend individual sounds together in order to read full words. For example, “s” + “a” + “t” = sat. Lots of blending practice builds reading fluency."
          />
          <Scard 
              img="https://images.squarespace-cdn.com/content/v1/5e81cbf7dc34fb6814e3f255/1585915785318-6X7SH088JMST6GBKDZ6D/ke17ZwdGBToddI8pDm48kOhyb-WqUH9mdIhg2m6kWrF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWwUtYZN6N1of5YrRfIenmBfq6gqrCb3uifgAuS3iO70P7cJNZlDXbgJNE9ef52e8w/segmenting.png?format=500w"
              title="Segmentation"
              text="Children are taught how to hear the individual sounds in full words so that they can break them down to write and spell them correctly. For example, hen = “h” + “e” + “n”"
          />
          <Scard 
              img="https://images.squarespace-cdn.com/content/v1/5e81cbf7dc34fb6814e3f255/1585915797318-KZJ0WNLIVROK369V3C16/ke17ZwdGBToddI8pDm48kOhyb-WqUH9mdIhg2m6kWrF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWwUtYZN6N1of5YrRfIenmBfq6gqrCb3uifgAuS3iO70P7cJNZlDXbgJNE9ef52e8w/Tricky+Words.png?format=500w"
              title="Tricky Words"
              text="Some words do not follow the sound rules. Children are taught these words separately, alongside strategies to remember them. For example, “the” and “she”."
          />
        </div>
      </div>
    </>
  );
}

export default Skill;
