<form>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Marke:</label>
    <div class="col-sm-10">
      <input class="form-control" type="text" name="make" value={make} onChange={(event) => setMake(event.target.value)} />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Year: </label>
    <div class="col-sm-10">
      <input class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
    <button type="button" class="btn btn-dark" onClick={() => check()}>Validate</button>
    </div>
  </div>
</form>