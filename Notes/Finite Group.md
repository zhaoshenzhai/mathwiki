<div class="topSpace"></div>

Date Created: 19/09/2022 11:53:54
Tags: #Definition #Courses/MATH235

Types: _Not Applicable_
Examples: [[Trivial Group]], [[Additive Group of Integers mod n]], [[Multiplicative Group of Integers mod n]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Lagrange's Theorem]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_A group $\tpl{G,\ast}$ is said to be a **finite group** if $\l|G\r|<\infty$._

```

**Remark.** For small finite groups, it is convenient to express $\bullet$ as a $\textrm{`}$Cayley table$\textrm{'}$:
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-09-20_154236/image.svg", width=210></center>

The top and left headers list out the elements of $G$ (without repeat, as it is a set) starting with $e$. Notice that the first row and first column are then uniquely determined. Also, in any given row, no elements are repeated. If some element $t\in G$ is repeated in the same row, say $t=gi$ and $t=gj$ for distinct $i,j\in G$, then, from the cancellation laws, we see that $i=j$, a contradiction. Since there are $\l|G\r|$ columns and no element in the same row is repeated, every element appears exactly once in a given row. Similarly, every element appears exactly once in a given column.

We can easily write out all the possible multiplication tables for when $\l|G\r|$ is small enough, say $1$, $2$, $3$, and $4$. Let $m_{ij}$ denote the group element in the $i^\mathrm{th}$ row and $j^\mathrm{th}$ column.
* This is trivial (literally!).
* Let $G=\l\{e,g\r\}$. Since the first row and first column are uniquely determined, we only need to decide whether $m_{22}=e$ or $m_{22}=g$. We cannot have any repeated elements in any given row, and since $m_{21}=g$, we require $m_{22}\neq g$. Thus $m_{22}=e$.
* Let $G=\l\{e,g,h\r\}$. Since $m_{22}\neq g$, either $m_{22}=e$ or $m_{22}=h$. In the former case, we must then have $m_{23}=h$. But $m_{13}=h$ too, so this is a wrong choice. Hence $m_{22}=h$ and $m_{23}=e$. The last row is then determined uniquely.
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-09-20_154802/image.svg", width=450></center>

* Let $G=\l\{e,g,h,k\r\}$. Continuing exactly as before and keeping track of our choices, we obtain the following four multiplication tables:
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-09-20_155123/image.svg", width=670></center>

However, looking at the diagonal of the bottom-right $3\times3$ block, we see that the first table has all its entries $e$ while the rest have only one $e$. In fact, the other three are all just rearrangements of the same group, so there are two groups of order $4$ up to isomorphism. Notice that all groups with $\l|G\r|\in\l\{1,2,3,4\r\}$ are Abelian.<span style="float:right;">$\blacklozenge$</span>
