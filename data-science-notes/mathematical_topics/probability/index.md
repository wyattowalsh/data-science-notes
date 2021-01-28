# Probability

---

## Suggested Prerequisites

---

## Overview

### Probability Space

A probability space: $(\Omega, \mathcal{F}, P)$ where 

- $\Omega$ is the sample space (set of all possible outcomes)

- $\sigma$-algebra $\mathcal{F}$ is a set of events where each event is an outcome

- $P$ is a function giving the probability of an event

#### Probability Function ($P$)

Probability of an event must be greater than or equal to zero, probability of the sample space is equal to one, and probabilities of an intersection are additive:

- $P(A) \geq 0$

- $P(\Omega) = 1$ 

- $P(A_1 \cup A_1 \cup ...) = P(A_1) + P(A_2) + ... $ for any countable collection of mutually exclusive events $A_1, A_2, ...$

#### Consequences

- $P(o_i)  = 1/n $ in a sample space $\Omega = \{ o_1, o_2, ..., o_n\}$ **where each outcome $o_i$ is equally likely to occur** $\hspace{5pt} \forall \hspace{5pt} i = 1, ..., n$

- $P(\bar{A}) = 1 - P(A)$ where $\bar{A}$ is the **complement** of event $A$

- For events $A$ and $B$, $P(A\cup B) = P(A) + P(B) - P(A\cap B)$

- If $A\subseteq B$, then $P(A) \leq P(B)$

- For any event A, $P(A) = \sum_{k=1}^m P(A \cap B_k)$ where mutually exclusive events $B_1, B_2, ..., B_m$ such that $B_1 \cup B_2 \cup ... \cup B_m$ and $P(B_i) > 0 \hspace{5pt} \forall \hspace{5pt} i $

### Conditional Probability

---

## Sources

```{bibliography}
:filter: docname in docnames
```

---

Contributions made by our wonderful GitHub Contributors: [@wyattowalsh](https://github.com/wyattowalsh)
