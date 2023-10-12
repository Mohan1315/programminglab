// Program for dare to decode
#include <conio.h>
#include <stdio.h>
#include <time.h>

int tamatar = 0;
static int sachin = 0;
typedef struct ronaldo
{
  int dude, modi;
  struct ronaldo *tumtum, *bro;
}

ronaldo;
ronaldo *tata_ko_mila_bata(ronaldo *, int);
ronaldo *bata_ko_mila_tata(ronaldo *, int);
void tutu(ronaldo *);
void gayekamsay(ronaldo *);
void Amit(ronaldo *);
int tomtom(ronaldo *);
ronaldo *dimagghumrahahai(ronaldo *);
ronaldo *ghumrahahaidimag(ronaldo *);
ronaldo *a(ronaldo *);
ronaldo *b(ronaldo *);
ronaldo *c(ronaldo *);
ronaldo *d(ronaldo *);
int busbahuthogaya(ronaldo *);


void main(){
  ronaldo *nahihota = NULL;
  int x, n, i, topi;
  long double kyakaru = 0;
  clock_t timepass, bus;
  do{

    printf("\n%d", sachin);
    printf("\n1) : ");
    printf("\n2) : ");
    printf("\n3) : ");
    printf("\n4) : ");
    printf("\n5) : ");
    printf("\n Kuch bhi type kar de : ");
    scanf("%d", &topi);
    switch (topi)

    {
    case 1:
      printf("\nKuch bhi type kar de :");
      scanf("%d", &n);
      printf("\n Kuch bhi type kar de :");
      nahihota = NULL;
      timepass = clock();

      for (i = 0; i < n; i++){

        scanf("%d", &x);
        timepass = clock();
        nahihota = tata_ko_mila_bata(nahihota, x);
        bus = clock();
        kyakaru = kyakaru + bus - timepass;
      }

      printf("Nahi samaz mai aa raha hai = %ld", kyakaru);
      break;

    case 2:
      printf("\nKuch bhi type kar de : ");
      scanf("%d", &x);
      nahihota = tata_ko_mila_bata(nahihota, x);
      break;

    case 3:
      printf("\nKuch bhi type kar de : ");
      scanf("%d", &x);
      nahihota = bata_ko_mila_tata(nahihota, x);
      break;

    case 4:
      printf("\nprint :\n");
      gayekamsay(nahihota);
      printf("\nprint :\n");
      tutu(nahihota);
      printf("\nprint :\n");
      Amit(nahihota);
      printf("%d", tamatar);
      printf("\nprint :\n");
      koitopasskarde(nahihota, 0);
      break;
    }
  } while (topi != 5);
}


ronaldo *tata_ko_mila_bata(ronaldo *end, int x){

  if (end == NULL){

    end = (ronaldo *)malloc(sizeof(ronaldo));
    end->modi = x;
    end->bro = NULL;
    end->tumtum = NULL;
  }

  else if (x > end->modi){

    end->tumtum = tata_ko_mila_bata(end->tumtum, x);
    if (busbahuthogaya(end) == -2)
      if (x > end->tumtum->modi)
        end = a(end);
      else
        end = d(end);
  }

  else if (x < end->modi){

    end->bro = tata_ko_mila_bata(end->bro, x);
    if (busbahuthogaya(end) == 2)
      if (x < end->bro->modi)
        end = b(end);
      else
        end = c(end);
  }
  end->dude = tomtom(end);
  return (end);
}


ronaldo *bata_ko_mila_tata(ronaldo *end, int x){

  ronaldo *p;
  if (end == NULL){
    return NULL;
  }
  else if (x > end->modi){

    end->tumtum = bata_ko_mila_tata(end->tumtum, x);
    if (busbahuthogaya(end) == 2)
      if (busbahuthogaya(end->bro) >= 0)
        end = b(end);
      else
        end = c(end);
  }

  else if (x < end->modi){

    end->bro = bata_ko_mila_tata(end->bro, x);
    if (busbahuthogaya(end) == -2) // windup
      if (busbahuthogaya(end->tumtum) <= 0)
        end = a(end);
      else
        end = d(end);
  }
  
  else
  {
    if (end->tumtum != NULL){
      p = end->tumtum;
      while (p->bro != NULL)
        p = p->bro;
      end->modi = p->modi;
      end->tumtum = bata_ko_mila_tata(end->tumtum, p->modi);
      if (busbahuthogaya(end) == 2) // windup
        if (busbahuthogaya(end->bro) >= 0)
          end = b(end);
        else
          end = c(end);
    }

    else
      return (end->bro);
  }

  end->dude = tomtom(end);
  return (end);

}


int tomtom(ronaldo *end){

  int lh, rh;
  if (end == NULL)
    return (0);
  if (end->bro == NULL)
    lh = 0;
  else
    lh = 1 + end->bro->dude;
  if (end->tumtum == NULL)
    rh = 0;
  else
    rh = 1 + end->tumtum->dude;
  if (lh > rh)
    return (lh);
  return (rh);

}


ronaldo *dimagghumrahahai(ronaldo *x){

  ronaldo *y;
  y = x->bro;
  x->bro = y->tumtum;
  y->tumtum = x;
  x->dude = tomtom(x);
  y->dude = tomtom(y);
  return (y);

}


ronaldo *ghumrahahaidimag(ronaldo *x){

  ronaldo *y;
  y = x->tumtum;
  x->tumtum = y->bro;
  y->bro = x;
  x->dude = tomtom(x);
  y->dude = tomtom(y);
  return (y);

}


ronaldo *a(ronaldo *end){

  sachin = sachin + 1;
  end = ghumrahahaidimag(end);
  return (end);

}


ronaldo *b(ronaldo *end){

  end = dimagghumrahahai(end);
  return (end);

}


ronaldo *c(ronaldo *end){

  end->bro = ghumrahahaidimag(end->bro);
  end = dimagghumrahahai(end);
  return (end);

}


ronaldo *d(ronaldo *end){

  end->tumtum = dimagghumrahahai(end->tumtum);
  end = ghumrahahaidimag(end);
  return (end);

}


int busbahuthogaya(ronaldo *end){

  int lh, rh;
  if (end == NULL)
    return (0);
  if (end->bro == NULL)
    lh = 0;
  else
    lh = 1 + end->bro->dude;
  if (end->tumtum == NULL)
    rh = 0;
  else
    rh = 1 + end->tumtum->dude;
  return (lh - rh);

}


void gayekamsay(ronaldo *end){

  if (end != NULL){
    gayekamsay(end->bro);
    gayekamsay(end->tumtum);
    printf(" %d(busbahuthogaya=%d)", end->modi, busbahuthogaya(end));
  }
}


void tutu(ronaldo *end){

  if (end != NULL){
    printf(" %d(busbahuthogaya=%d)", end->modi, busbahuthogaya(end));
    tutu(end->bro);
    tutu(end->tumtum);
  }

}


void Amit(ronaldo *end){
  if (end != NULL){
    Amit(end->bro);
    {
      printf(" %d(busbahuthogaya=%d)", end->modi, busbahuthogaya(end));
      if ((end->bro == NULL) & (end->tumtum == NULL))
        tamatar = tamatar + end->modi;
    }

    Amit(end->tumtum);
  }
}


void koitopasskarde(ronaldo *t, int depth){
  if (t != NULL){
    printf(" %d(busbahuthogaya=%d)", t->modi, busbahuthogaya(t));
  }

  if (t != NULL){
    koitopasskarde(t->bro, depth + 1);
    
    if (depth % 2 == 0)
      koitopasskarde(t->tumtum, depth + 1);
  }
}
