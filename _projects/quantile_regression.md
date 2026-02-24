---
layout: page
title: Predict GDP Growth
description: Predict at economic boom & bust using a quantile regression + random forest method
img: assets/img/project_resource/quantile_reg/quantile_reg_head.png
importance: 1
category: academic
tags: [ml, statistics]
date: 2022-05-01
github:
demo: https://etd.library.emory.edu/concern/etds/n009w3620?locale=en
pdf: /assets/pdf/Honors_Thesis_Presentation.pdf
---

```
Advisor: Dr. Seunghwa Rho
```

Imagine you ordered a takeout on your phone, and it says your food will arrive between **6:00-6:30**. Why exactly does it gives an interval rather than just a specific time? This is because when the traffic is bad, the driver might take more time to deliver the food and less time if there's all green light!

<div class="row">
    <!-- <div class="col-sm-8 mt-3 mt-md-0"> -->
    <div class="col-sm-8 col-sm-offset-4">
        {% include figure.html path="assets/img/project_resource/quantile_reg/quant_reg_intro.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This is a simple example of "quantile regression" in real life - predict at different situations. In this project, I analyzed the relationship between GDP growth and economic and financial conditions across quantiles by applying quantile regression and tree based methods.

The ability to forecast GDP growth is important because it indicates the general health of the economy and helps policymakers make decisions. Mostly, economists focus on point estimates for **conditional mean of GDP growth** along with other economic variables, which can overly generalize the information given by the data. It is of equal interest for us to understand the relationship between independent variables and a dependent variable at different quantiles, i.e. the behaviors of economies **at different economic conditions**.

The thesis is published at <a href="https://etd.library.emory.edu/concern/etds/n009w3620?locale=en">Emory Theses and Dissertations Repo</a>, and the slides are available below:

<object width="80%" height="400" data="http://katherinewangqw.github.io/assets/pdf/Honors_Thesis_Presentation.pdf" type="application/pdf"> alt : <a href="http://katherinewangqw.github.io/assets/pdf/Honors_Thesis_Presentation.pdf">Download the slides here.</a>
</object>

<!-- <iframe src="//www.slideshare.net/slideshow/embed_code/key/2GCXok59XCB35c" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/QinwenKatherineWang/honorsthesispresentationpdf" title="Honors_Thesis_Presentation.pdf" target="_blank">Honors_Thesis_Presentation.pdf</a> </strong> from <strong><a href="//www.slideshare.net/QinwenKatherineWang" target="_blank">QinwenKatherineWang</a></strong> </div> -->