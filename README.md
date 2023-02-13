<h1 align="center"> $\textcolor{orange}{Colect\ multiple\ repository\ inside\ main\ repository\ }$
</h1>

<details>

<summary>
Step1

</summary>
Clone main repository from upstream.

```
git clone (copy url of git from upstream)
```

</details>

<details>

<summary>
Step2
</summary>

cd to (cloned dir)
Make a directory for part1

```
mkdir part1
```

</details>

<details>

<summary>
Step 3
</summary>
cd to main repo, add and commit  the downsteem changes to upstream

```
git add .
```

```
git commit -m "xxxx"
```

```
git push -u origin main
```

</details>

<details>

<summary>
Step 4
</summary>
Create react app or any project work file in js inside the sub directory part1 . Then push all work upstream like normal repo.

#### You can skip this step and jump to step 4 and comeback here later.

```
git add .
```

```
git commit -m "xxxx"
```

```
git push -u origin main
```

</details>
