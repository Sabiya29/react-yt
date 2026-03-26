import { Bookmark } from 'lucide-react'
import Card from './components/Card'
function App() {
  
const jobOpenings = [
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.DoYuESoRecI9l-vyqdrEnQHaE-?pid=Api&P=0&h=180",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 65,
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.T--crSomuP6_kutN7bR07QHaEv?pid=Api&P=0&h=180",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 72,
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.jkX_YbI1YbpNvd8E4TBbRQHaEK?pid=Api&P=0&h=180",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&P=0&h=180",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 60,
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.CJnMgj-ZpoJw9NQChwSU_QHaEK?pid=Api&P=0&h=180",
    companyName: "Netflix",
    datePosted: "10 weeks ago",
    post: "Cloud Infrastructure Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 95,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.7IgX6OczyQrC3djWBE8xnwHaHa?pid=Api&P=0&h=180",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Azure DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 70,
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.m1ar389tpEOAFN1NTurqvwHaHa?pid=Api&P=0&h=180",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.zDbJfohjoZkSx8i9gj-bYgHaE0?pid=Api&P=0&h=180",
    companyName: "NVIDIA",
    datePosted: "8 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.9ZUO8oKVSx3FGQLV4-8eewHaEo?pid=Api&P=0&h=180",
    companyName: "Adobe",
    datePosted: "9 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 55,
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.5x0bqIWJZ0Q912i6olkDLwHaEK?pid=Api&P=0&h=180",
    companyName: "Oracle",
    datePosted: "7 weeks ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Austin, USA"
  }
];
// console.log(jobOpenings);


  return (
    <div className='parent'>
      {jobOpenings.map(function(el){
        return <Card company={el.companyName} datePosted={el.datePosted} post={el.post}
         brandLogo={el.brandLogo} pay={el.pay} tag1={el.tag1} tag2={el.tag2}/>
      })}

    </div>
  );
}

export default App;
// export default jobOpenings;
