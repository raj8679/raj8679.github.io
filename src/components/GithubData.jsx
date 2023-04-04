import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "../styles/GithubData.css"

const GithubData = () => {
  return (
    <>
    <div class="github-container">
      <h2>My Github: Stats and Calendar</h2>

      <div class="stats">  
        <img id="github-stats-card" class="streak_Img" src="https://github-readme-stats.vercel.app/api?username=raj8679&theme=dark&show_icons=true" alt="raj" />
          <img id="github-streak-stats" class="stat_Img" src="https://github-readme-streak-stats.herokuapp.com/?user=raj8679&theme=blue-green" alt="" />            
      </div>
      
      <div >
        <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=raj8679&theme=dark&layout=compact" alt="gitLang" />
        </div>    
      <div class="calendar">
      <GitHubCalendar class="react-activity-calendar" username="raj8679" />
      </div>     

    </div>
    </>
    
  )
}

export default GithubData