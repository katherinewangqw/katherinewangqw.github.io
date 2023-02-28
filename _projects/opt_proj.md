---
layout: page
title: Optimize Delivery Routing
description: Optimization project - revisit Roaming Delivery Location problem
img: 
importance: 3
category: academic
---

```
Teammate: Xinyao Han
```

With the growth of e-commerce and emerging online shopping platforms such as Amazon Prime, the demand for on-time, direct-to-customer deliveries has been ever increasing. However, customers are usually active at different locations during specific time windows on one day, and are therefore not able to receive packages directly at a fixed location all day long. For companies that would like to add more personalizations, it is important for them to give customers the option to choose the time and location they would like the goods to be handed. We view this problem as a vehicle routing problem, and specifically as a variant with random delivery locations and stochastic travel times. The project aim is to find optimized routes that can significantly maximize the efficiency of the fleet. 

We follow the notation in [Reyes et al. (2017)](https://www.sciencedirect.com/science/article/pii/S2352146518300917) and made modifications upon implementation in Julia.

<div class="row">
    <!-- <div class="col-sm-8 mt-3 mt-md-0"> -->
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_resource/opt_eqs.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The constraints are listed in the graph above, and more detailed information can be found in the origional paper. Poster for the project can be found below:

<object width="100%" height="500" data="http://katherinewangqw.github.io/assets/pdf/opt_proj.pdf" type="application/pdf"> alt : <a href="http://katherinewangqw.github.io/assets/pdf/opt_proj.pdf">Download the poster here.</a>
</object>