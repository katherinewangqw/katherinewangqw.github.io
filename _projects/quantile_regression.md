---
layout: page
title: Predict GDP growth
description: predict at economic boom & bust, a quantile regression + random forest method
img: assets/img/project_resource/quantile_reg/quantile_reg_head.png
importance: 3
category: academic
---

The ability to forecast GDP growth is important because it indicates the general health of the economy and helps policymakers make decisions. Mostly, economists focus on point estimates for conditional mean of GDP growth along with other economic variables, which can overly generalize the information given by the data. It is of equal interest for us to understand the relationship between independent variables and a dependent variable at different quantiles, i.e. the behaviors of economies at different economic conditions.

In this project, I analyzed the relationship between GDP growth and economic and financial conditions across quantiles by applying quantile regression and tree based methods. The first question to answer probabily is: What is quantile regression?

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_resource/quantile_reg/quant_reg_intro.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<img src="assets/img/project_resource/quantile_reg/quant_reg_intro.png"  style="width:128px;height:128px;">



Among all the machine learning methods, I choose to use tree based method because it can capture the non-linear relationship between economies under different conditions. For example, during the recession versus the booming periods, the relationship between financial conditions and the GDP growth can change. Then it is like having different regimes, and such conditions can be better captured by tree based methods because tree based methods divide data into pieces.


What is quantile regression?

<iframe src="//www.slideshare.net/slideshow/embed_code/key/2GCXok59XCB35c" width="595" height="450" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>

<!-- <iframe src="//www.slideshare.net/slideshow/embed_code/key/2GCXok59XCB35c" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/QinwenKatherineWang/honorsthesispresentationpdf" title="Honors_Thesis_Presentation.pdf" target="_blank">Honors_Thesis_Presentation.pdf</a> </strong> from <strong><a href="//www.slideshare.net/QinwenKatherineWang" target="_blank">QinwenKatherineWang</a></strong> </div> -->