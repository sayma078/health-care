import React from "react";
import { Accordion } from "react-bootstrap";
import img from "../../images/banner/banner-2.jpg";

const FAQ = () => {
  return (
    <div className="container mt-5">
      <h2>Frequently Asked Questions</h2>
      <div className="row mt-5 p-5 d-flex justify-content-center bg-warning">
      <div className=" col-md-4">
        <img className="w-100"  src={img} alt="" />
      </div>
      <div className="mx-3 mt-3 col-md-8 ">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              At what age should I start taking my child to see the dentist?
            </Accordion.Header>
            <Accordion.Body>
              The American Academy of Pediatric Dentistry (AAPD) recommends that
              children first see a dentist as early as six months of age and no
              later than one year of age. During this time, your child’s baby
              teeth will be coming in and your dentist can examine the health of
              your child’s first few teeth. After the first visit, be sure to
              schedule regular checkups every six months.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why is visiting the dentist so important?
            </Accordion.Header>
            <Accordion.Body>
              Visiting the dentist regularly will not only help keep your teeth
              and mouth healthy, but will also help keep the rest of your body
              healthy. Dental care is important because it:
              <li>Helps prevent tooth decay</li>
              <li>
                Protects against periodontal (gum) disease, which can lead to
                tooth and bone loss
              </li>
              <li>
                Prevents bad breath – brushing, flossing, and seeing the dentist
                regularly will help reduce the amount of bacteria in your mouth
                that causes bad breath
              </li>
              <li>
                Gives you a more attractive smile and increases your
                self-confidence
              </li>
              <li>
                Helps keep teeth looking bright by preventing them from becoming
                stained by food, drinks, and tobacco
              </li>
              <li>
                Strengthens your teeth so that you can enjoy healthy, beautiful
                smiles for the rest of your life!
              </li>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              When should I change my toothbrush?
            </Accordion.Header>
            <Accordion.Body>
              Your toothbrush will eventually wear out, especially if you are
              brushing your teeth twice a day for two to three minutes each
              time. Your dentist recommends that adults and children change
              their toothbrush every three months. If you are using an electric
              toothbrush, be sure to read the directions because you may not
              need to change toothbrush heads as frequently. Patients with gum
              disease are encouraged to change their toothbrush every four to
              six weeks to keep any bacteria from spreading. After brushing,
              rinse your toothbrush with hot water to kill germs and keep the
              bristles clean. If you’ve been sick, be sure to change your
              toothbrush as soon as possible.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What is gum disease?</Accordion.Header>
            <Accordion.Body>
              Also known as periodontal disease, gum disease is mostly caused by
              plaque and bacteria buildup that is not treated in its early
              stage. Other causes of periodontal disease include tobacco use,
              teeth grinding, some medications, and genetics. Gingivitis is the
              beginning stage of gum disease, and, if detected, is treatable.
              Gingivitis left untreated may turn into gum disease. Advanced gum
              disease will lead to tooth and bone loss, and is a permanent
              condition. Brushing your teeth regularly and visiting the dentist
              every six months will help prevent gingivitis and more severe
              cases of periodontal disease
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              What should I look for when choosing the right dentist for me?
            </Accordion.Header>
            <Accordion.Body>
              Choosing a dentist who “clicks” with you and your family is
              important, and you may wish to consider several dentists before
              making your final decision. During your first visit, you should be
              able to determine whether the dentist is right for you. During
              your appointment, consider the following:
              <li>Is the appointment schedule convenient?</li>
              <li>Is the office easy to get to and close by?</li>
              <li>Does the office appear to be clean and orderly?</li>
              <li>
                Was your medical and dental history recorded and placed in a
                permanent file?
              </li>
              <li>Does the dentist explain techniques for good oral health?</li>
              <li>
                Is information about cost presented to you before treatment is
                scheduled?
              </li>
              <li>
                Is your dentist a member of the ADA (American Dental
                Association)?
              </li>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              At what age should I start taking my child to see the dentist?
            </Accordion.Header>
            <Accordion.Body>
              The American Academy of Pediatric Dentistry (AAPD) recommends that
              children first see a dentist as early as six months of age and no
              later than one year of age. During this time, your child’s baby
              teeth will be coming in and your dentist can examine the health of
              your child’s first few teeth. After the first visit, be sure to
              schedule regular checkups every six months.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
