import TemplateCardMore from "../../../template/CardMore"
function BlogPost() {


     const arr = [
          {
               time: 'Oct 28, 2022, Iryna Pisklyarova',
               title: 'RubyMine 2022.3 EAP5: Improved Navigation, New Project Wizard, and Vue Support',
               des: 'RubyMine 2022.3 EAP5 is out!  In this post, you’ll find details about the most notable improvements available in this build. We invite you to download it and share your',
               btn: 'Read more',
          },
          {
               time: 'Oct 28, 2022, Iryna Pisklyarova',
               title: 'TeamCity 2022.10: Sakura UI, Improved Integration With Amazon AWS, Out-of-the-Box HTTPS Support, Google OAuth Authentication, and More.',
               des: 'RubyMine 2022.3 EAP5 is out!  In this post, you’ll find details about the most notable improvements available in this build. We invite you to download it and share your',
               btn: 'Read more',
          },
          {
               time: 'Oct 28, 2022, Iryna Pisklyarova',
               title: 'Join Our YouTrack Project Management: Essentials for Getting Started Online Webinar',
               des: 'Sign up for our YouTrack Project Management: Essentials for Getting Started webinar. You’ll get an overview of how to manage your tasks and projects easily, work with your team’s Agile boards, use powerfu',
               btn: 'Read more',
          }

     ]

     return (
          <div className="container">
               <div className="row">
                    <h1> News & events</h1>
               </div>
               <div className="row">
                    {
                         arr.map((arr, i) => {

                              return <TemplateCardMore key={i} time={arr.time} title={arr.title} des={arr.des} btn={arr.btn} />
                         })

                    }
               </div>
          </div>
     )
}
export default BlogPost
