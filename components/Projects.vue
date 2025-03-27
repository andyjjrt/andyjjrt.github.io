<template>
  <Card title="Projects">
    <ul class="list">
      <Project
        v-for="project in projects"
        :screenshot="project.screenshot"
        :title="project.title"
        :languages="project.languages"
        :description="project.description"
        :website="project.website"
        :github="project.github"
      />
    </ul>
  </Card>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "專題研究：一言不合就排課",
    languages: ["Python", "LangChain"],
    description:
      "將每學期的選課作業改為問答方式進行，應用「課程爬蟲」獲得之課程資料，篩選有用的資訊，再進行相似度搜尋。使用者可透過提問或指令方式進行選課作業，屆時語言模型將依課程時間、上課內容及課程評價，自動推薦並生成課表。",
    github: "https://github.com/NCCUCourseScheduling/CourseLangChain",
    screenshot: "/img/projects/CourseLangChain.png",
  },
  {
    title: "Rosetta 音樂機器人",
    languages: ["Python"],
    description:
      "此專案是因為在和朋友使用Discord通訊軟體時想一起分享音樂，但現有機器人會因為Youtube的平台規定而有無法播放的問題，因此參考網路資源完成這個專案。目前透過python進行重構，並整合LLM生態系讓用戶可以在discord就可以和llm互動。",
    website: "https://rosetta.andyjjrt.cc",
    github: "https://github.com/andyjjrt/rosetta",
    screenshot: "/img/projects/rosetta.png",
  },
  {
    title: "計算機程式設計 OnlineJudge",
    languages: ["Vue", "Nginx", "Python", "Docker"],
    description:
      "這個專案修改原青島大學開源的 OnlineJudge 系統，依據學生回饋，重新設計UI並優化網頁使用者體驗。在編譯器需要更新時，也同步更新Dockerfile並確保Server正常運作。",
    website: "https://oj.ebg.tw",
    github: "https://github.com/andyjjrt/ojFE",
    screenshot: "/img/projects/ojFE.png",
  },
  {
    title: "OpenNCCU APP",
    languages: ["Nuxt 3", "Tailwind Css", "Docker"],
    description:
      "在這個專案中，我擔任Development Lead，負責專案進度管理及團隊溝通，帶領新手團隊成員進入專案，並整合各成員的進度。我同時也在專案中引入Docker的佈署，配合CI/CD做到自動部屬及版本管控。",
    website: "https://opennccu.com",
    screenshot: "/img/projects/OpenNCCU-App.png",
  },
  {
    title: "OpenNCCU 選課系統",
    languages: ["React", "Tailwind CSS", "ExpressJs", "SQLite"],
    description:
      "這個專案中我帶領團隊進行前端專案重構，擔任開發PM負責開發進度控制，並協同處理設計與後端溝通問題，包括：制定Component模板，前端資料結構設計後端資料驗證，快取加速搜尋CI/CD建構，自動發佈及部屬。專案原本依賴電算中心提供的Web API搜尋系統，利用腳本爬出資料，變成單純的資料庫搜尋，除了效能上的提升，也能更完整的搜尋到課程資料及客製化搜尋設定。",
    website: "https://course.opennccu.com",
    screenshot: "/img/projects/OpenNCCU-SCSR.png",
  },
  {
    title: "課程爬蟲",
    languages: ["Python", "SQLite"],
    description:
      "此專案利用課程查詢API，藉登入後爬取老師資料，進而透過爬蟲取得課程評價，並設計資料庫以解決課程繼承問題。這個專案重新撰寫過多次，每次重寫對Python程式架構都有多一層的理解，尤其是模組化程式設計及物件導向程式設計。",
    github: "https://github.com/andyjjrt/NCCUCourse",
  },
];
</script>
