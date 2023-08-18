import SectionHeading from "../../Reusable/SectionHeading";
import FAQItem from "./FAQItem";



const Faq = () => {
    const faqData = [
        {
          question: 'Do you use automated tools for invisible mannequin photo editing service?',
          answer:
            'Not at all! We use a high-quality pen tool to mark the clipping path for adding the invisible mannequin effect manually. Our team of expert designers works tirelessly to make this happen.',
        },
        {
          question: 'How many edited pictures can you submit in a day with ghost mannequin?',
          answer:
            'Depending on the images, we can submit 2000-3000 (or even more) pictures per day with ghost mannequin.',
        },
        {
          question: 'do you cmuch harge How for ghost mannequin services?',
          answer:
            'Our packages are catered to your needs and we offer the most affordable deals in photo editing. To know about our ghost mannequin charges, check out our pricing page. ',
        },
        {
          question: 'How much do you charge for ghost mannequin services?',
          answer:
            'Our packages are catered to your needs and we offer the most affordable deals in photo editing. To know about our ghost mannequin charges, check out our pricing page.',
        },
        {
          question: 'Can I have a free service to check the quality of your work?',
          answer: 'Yes, you can avail of a free ghost mannequin product editing service as a free trial.',
        },
        {
          question: ' How many revisions can I get for a photo editing service? ',
          answer: 'We’re ready to make as many edits as you need to ensure you’re satisfied with the work. ',
        },
  ];

  return (
    <div className="lg:max-w-7xl w-full px-5 lg:px-0 mx-auto">
      <div className="py-10">
        <div className="text-center space-y-3">
          <SectionHeading
          Title='Frequently Asked Questions - FAQ'
          Subtitle=" Clipping Path Graphics ensures professional and top-notch product background removal
          service catering to our clients' needs. We take pride in our professionalism and utmost
          dedication."      
          >
            
          </SectionHeading>
          
          
        </div>
      </div>
      <div className="lg:flex gap-7 lg:flex-nowrap md:flex-wrap justify-between align-bottom items-end py-10">
      <div className="lg:w-1/2 w-full">
                <img src="https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/faq.svg" alt="" />
            </div>


       <div className="lg:w-1/2 w-full lg:my-0 my-5">
       {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            idx={index}
          />
        ))}
       </div>
      </div>
    </div>
  );
};

export default Faq;
