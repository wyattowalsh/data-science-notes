# The Elastic Net

---

## Suggested Prerequisites

- [Linear Regression Modeling](https://makeuseofdata.com/machine_learning_and_data_mining/regression/index.html#linear-regression-modeling)

- [Ordinary Least Squares](https://makeuseofdata.com/machine_learning_and_data_mining/models/ols/index.html)

- [Ridge Regression](https://makeuseofdata.com/machine_learning_and_data_mining/models/ridge/index.html)

- [The Lasso](https://makeuseofdata.com/machine_learning_and_data_mining/models/lasso/index.html)

---

### Notes:

- Compromise between ***Ridge Regression*** and ***the Lasso***

- Helps to reduce **overfitting** by bringing model coefficients towards zero and selectively to zero 

- Arguably the most robust linear regularized method

### Loss Function and Optimization Problem

The associated loss function for ***the Elastic Net*** modifies the OLS loss function through the addition of both an $L_1$ and $L_2$ penalties controlled by tuning parameters $\lambda$ and $\alpha$ respectively as: 

$$
L(\mathbf{\beta}) =  \|\mathbf{y} - \mathbf{X}\mathbf{\beta}\|_2^2 + \lambda [(1-\alpha)\frac{1}{2} \|\mathbf{\beta}\|_2^2 + \alpha \|\mathbf{\beta}\| ] \: \: \: \text{ with tuning parameters $\lambda \geq 0, 0 \leq \alpha \leq 1$  } 
$$

In this context, $\alpha$ can be considered as the parameter controlling the ratio of $L_1$ penalty and $\lambda$ is the intensity of regularization to apply. 

Formulating the loss function as a *least-squares* optimization problem yields: 

$$
\hat{\mathbf{\beta}} = \arg\min_{\mathbf{\beta}} L(\mathbf{\beta}) = \arg\min_{\mathbf{\beta}}  \frac{1}{2n}\|\mathbf{y} - \mathbf{X}\mathbf{\beta}\|_2^2 + \lambda [(1-\alpha)\frac{1}{2} \|\mathbf{\beta}\|_2^2 + \alpha \|\mathbf{\beta}\| ]
$$

Similarly to ***the Lasso***, a discrete optimization technique needs to be applied to yield a solution for the coefficient estimates. 

### Pathwise Coordinate Descent

The algorithm is similar to that of ***the Lasso***. Features should be should be standardized to have zero mean and unit variance. Coefficients should be updated as:

$$
\beta_j = \frac{\mathbf{S}(\beta_j^*, \lambda\alpha)}{1 + \lambda(1-\alpha)}
$$

where $\mathbf{S}$ is the same soft-thresholding operator applied in the case of ***the Lasso***:

$$
sign(\beta_j^*)(\left|\beta_j^*\right| - \lambda\alpha)_+ 
$$

Furthermore, if ***warm starts*** are to be utilized then $\lambda_{max}$ can be found as: 

$$
\lambda_{\text{max}} = \frac{\max_l \left|\langle x_l, y \rangle \right|}{n\alpha}
$$

### Implementation in Python Using NumPy

<script src="https://gist.github.com/wyattowalsh/3bfb1a924007f19a7191a17b6c4e52a0.js"></script>

```{warning}
In practice it is recommended to use a cross-validation technique such as K-Fold cross-validation to choose the tuning parameter, $\lambda$.
```

### Implementation in Python Using Scikit-Learn

- [Plain Elastic Net Function](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNet.html#sklearn.linear_model.ElasticNet)

- [Elastic Net Cross-Validation Function](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNetCV.html#sklearn.linear_model.ElasticNetCV)

- [Scikit-Learn User Guide Entry](https://scikit-learn.org/stable/modules/linear_model.html#elastic-net) {cite}`friedman_hastie_tibshirani_2010,hastie_friedman_tibshirani_2009,aswani_2021_note_8,stanford_2006,hastie_friedman_tisbshirani_2017`

---

## Sources

```{bibliography} references.bib
:filter: docname in docnames
:style: plain
```

---

Contributions made by our wonderful GitHub Contributors: [@wyattowalsh](https://github.com/wyattowalsh)
