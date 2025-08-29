+++
date = '{{ .Date }}'
draft = false
toc = false
categories = ['トレード記録']
title = '{{ now.Format "2" }}（{{ index (dict "Sunday" "日" "Monday" "月" "Tuesday" "火" "Wednesday" "水" "Thursday" "木" "Friday" "金" "Saturday" "土") (now.Weekday | printf "%s") }}）のデイトレ結果'
+++
