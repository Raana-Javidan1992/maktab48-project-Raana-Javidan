import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
// import RaisedButton from '@material-ui/core/RaisedButton';
import {Button, TextField, FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {  addAProduct , updateAProduct, deleteProduct} from "../redux/actions/productAction"
import { useSelector, useDispatch } from 'react-redux'
// import 'image-upload-react/dist/index.css';

/*
////upload button
*/

const useStyles2 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

function UploadButtons() {
  const classes2 = useStyles2();

  return (
    <div className={classes2.root}>
      <input
        accept="image/*"
        className={classes2.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes2.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}




function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 60 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddModal() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);


  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = useState();

  function handleEditAddBtn(rw) {
    setOpen(true);
    setSelected(rw);
}
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditSubmit = () => {
    dispatch(deleteProduct(selected.id));
    let prodoct = {
        "id":selected.id,
        "productName":nameProd, 
        "category":categProd,
        "image":imageSrc,
      }
      // for edit section
      if(selected.id != (products.length+1)){
        updateAProduct(prodoct);
      }else{  // for add section
        addAProduct(prodoct);
      }
      dispatch(addAProduct(prodoct));
    setOpen(false);
    }
    const [nameProd, setNameProd] = useState();
    const [categProd, setCategProd] = useState();
    useEffect(() => {
    console.log(categProd);
    }, [categProd])
    //   upload img
    const [imageSrc, setImageSrc] = useState()

    const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
    }
    //  console.log(imageSrc);
    function setdisplay() {
    return{
    width:"100%"
    }
    
    }

    const handleChange = (event) => {
    setCategProd(event.target.value);
    };

  return (
    <div>
      {/* <EditIcon type="button" onClick={handleOpen}/> */}
      <button onClick={handleOpen}>افزودن کالا</button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={getModalStyle()} className={classes.paper}>
            افزودن/ ویرایش کالا
        <br></br><br></br>
        <form  style={setdisplay()} className={classes.root} noValidate autoComplete="off">
                <label>تصویر کالا </label><br></br>
                {/* <ImageUpload 
                    handleImageSelect={handleImageSelect}
                    imageSrc={imageSrc}
                    setImageSrc={setImageSrc}
                    style={{
                        width: 120,
                        height: 120,
                        background: 'blue',
                        // marginLeft: "200%",
                    }}
                    /> */}
                <label>نام کالا </label><br></br>

                <TextField style={setdisplay()} id="outlined-basic" label="نام کالا" variant="outlined" onChange={(e)=>setNameProd(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <FormControl className={classes.formControl} style={setdisplay()}>
                  <InputLabel shrink htmlFor="age-native-label-placeholder">
                    دسته ها
                  </InputLabel>
                  <NativeSelect
                    value={categProd}
                    onChange={handleChange}
                  >
                    <option value="" >
                    دسته بندی
              </option>
                  <option onChange={()=>setCategProd("جواهرات")} >جواهرات</option>
                  <option  onClick={()=>setCategProd("لوازم الکترونیک")}>لوازم الکترونیک</option>
                  <option  onClick={()=>setCategProd("لباس زنانه")}>لباس زنانه</option>
                  <option  onClick={()=>setCategProd("لباس مردانه")}>لباس مردانه</option>
                  </NativeSelect>
                </FormControl><br></br><br></br>
                <div>

                
                    </div>
                    <br></br><br></br>
                <Button variant="contained" color="primary" style={{"width":"100%"}} onClick={handleEditSubmit}>ذخیره</Button>
            </form>
        </div>
      </Modal>
    </div>
  );
}